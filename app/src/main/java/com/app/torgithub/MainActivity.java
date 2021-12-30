package com.app.torgithub;

import android.content.Intent;
import android.os.Bundle;
import android.os.StrictMode;
import android.util.Log;
import android.view.View;
import android.widget.ProgressBar;
import android.widget.TextView;
import android.widget.Toast;

import androidx.appcompat.app.AppCompatActivity;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.InetAddress;
import java.net.InetSocketAddress;
import java.net.UnknownHostException;

import cz.msebera.android.httpclient.HttpEntity;
import cz.msebera.android.httpclient.HttpResponse;
import cz.msebera.android.httpclient.client.HttpClient;
import cz.msebera.android.httpclient.client.methods.HttpGet;
import cz.msebera.android.httpclient.client.protocol.HttpClientContext;
import cz.msebera.android.httpclient.config.Registry;
import cz.msebera.android.httpclient.config.RegistryBuilder;
import cz.msebera.android.httpclient.conn.DnsResolver;
import cz.msebera.android.httpclient.conn.socket.ConnectionSocketFactory;
import cz.msebera.android.httpclient.impl.client.HttpClients;
import cz.msebera.android.httpclient.impl.conn.PoolingHttpClientConnectionManager;
import cz.msebera.android.httpclient.ssl.SSLContexts;

public class MainActivity extends AppCompatActivity {

    TextView button, textPort, Disonnect, conDis;
    ProgressBar progressBar;
    String ivP4, portAddress;
    com.msopentech.thali.toronionproxy.OnionProxyManager onionProxyManager;

    public static int port;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        progressBar = findViewById(R.id.Progressbar);
        button = findViewById(R.id.button);
        textPort = findViewById(R.id.textPort);
        Disonnect = findViewById(R.id.Disonnect);
        conDis = findViewById(R.id.conDis);

        StrictMode.ThreadPolicy policy = new StrictMode.ThreadPolicy.Builder().permitAll().build();

        StrictMode.setThreadPolicy(policy);

        button.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                new TorTask().execute();
                progressBar.setVisibility(View.VISIBLE);
                button.setEnabled(false);
            }
        });

        Disonnect.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                try {
                    stopOnion();

                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        });
 }

    static class FakeDnsResolver implements DnsResolver {
        @Override
        public InetAddress[] resolve(String host) throws UnknownHostException {
            return new InetAddress[] { InetAddress.getByAddress(new byte[] { 1, 1, 1, 1 }) };
        }
    }


    public HttpClient getNewHttpClient() {

        Registry<ConnectionSocketFactory> reg = RegistryBuilder.<ConnectionSocketFactory>create()
                .register("http", new MyConnectionSocketFactory())
                .register("https", new MySSLConnectionSocketFactory(SSLContexts.createSystemDefault()))
                .build();
        PoolingHttpClientConnectionManager cm = new PoolingHttpClientConnectionManager(reg,new FakeDnsResolver());
        return HttpClients.custom()
                .setConnectionManager(cm)
                .build();
    }

    private class TorTask extends android.os.AsyncTask<String, Integer, String> {

        @Override
        protected String doInBackground(String... strings) {
            String fileStorageLocation = "torfiles";
//            com.msopentech.thali.toronionproxy.OnionProxyManager onionProxyManager =
            onionProxyManager = new com.msopentech.thali.android.toronionproxy.AndroidOnionProxyManager(getApplicationContext(), fileStorageLocation);
            int totalSecondsPerTorStartup = 4 * 60;
            int totalTriesPerTorStartup = 5;
            try {
                boolean ok = onionProxyManager.startWithRepeat(totalSecondsPerTorStartup, totalTriesPerTorStartup);

                if (!ok)
                    Toast.makeText(MainActivity.this, "Couldn't start tor", Toast.LENGTH_SHORT).show();

                while (!onionProxyManager.isRunning())
                    Thread.sleep(90);
                System.out.println("Tor initialized on port " + onionProxyManager.getIPv4LocalHostSocksPort());

                HttpClient httpClient = getNewHttpClient();
                 port = onionProxyManager.getIPv4LocalHostSocksPort();
                InetSocketAddress socksaddr = new InetSocketAddress("127.0.0.1", port);
                HttpClientContext context = HttpClientContext.create();
                context.setAttribute("socks.address", socksaddr);

                ivP4 = String.valueOf(onionProxyManager.getIPv4LocalHostSocksPort());
                portAddress = String.valueOf(socksaddr);


                //http://wikitjerrta4qgz4.onion/
                //https://api.duckduckgo.com/?q=whats+my+ip&format=json
                HttpGet httpGet = new HttpGet("https://api.duckduckgo.com/?q=whats+my+ip&format=json/");
                HttpResponse httpResponse = httpClient.execute(httpGet, context);
                HttpEntity httpEntity = httpResponse.getEntity();
                InputStream httpResponseStream = httpEntity.getContent();

                BufferedReader httpResponseReader = new BufferedReader(
                        new InputStreamReader(httpResponseStream, "iso-8859-1"), 8);
                String line = null;
                while ((line = httpResponseReader.readLine()) != null) {
                    System.out.println(line);
                    Log.d("line", line);
                }
                httpResponseStream.close();


            }
            catch (Exception e) {
                e.printStackTrace();

            }
            return "Connected !";
        }

        @Override
        protected void onPreExecute() {

            Log.d("preExecute", "see" );
        }

        @Override
        protected void onPostExecute(String result) {

            Log.d("post execute", result);
            progressBar.setVisibility(View.GONE);
            conDis.setText(result);
            button.setEnabled(true);
            textPort.setText("Tor initialized on port " + ivP4 + "\n" + "Socket Address " + portAddress);
            button.setVisibility(View.GONE);
            Disonnect.setVisibility(View.VISIBLE);
            startActivity(new Intent(MainActivity.this, TorBrowserActivity.class));

        }
    }

    public void stopOnion() throws IOException {
        if (onionProxyManager.isRunning()){
            onionProxyManager.stop();
//            button.setVisibility(View.VISIBLE);
//            Disonnect.setVisibility(View.GONE);
//            conDis.setText("Disconnected !");
//            textPort.setText("Tor Disconnected from port " + ivP4 + "\n" + "Socket Address " + portAddress);

        }
    }
}
