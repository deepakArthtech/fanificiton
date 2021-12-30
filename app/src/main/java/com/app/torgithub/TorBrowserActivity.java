package com.app.torgithub;

import android.app.Activity;
import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;
import android.os.Bundle;
import android.webkit.WebView;
import android.widget.TextView;
import android.widget.Toast;

import androidx.appcompat.app.AppCompatActivity;

import org.torproject.jni.TorService;

public class TorBrowserActivity extends AppCompatActivity {

    private WebView webView;
    GenericWebViewClient webViewClient;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        setContentView(R.layout.activity_tor_browser);

        webViewClient = new GenericWebViewClient(TorBrowserActivity.this);

        webView= findViewById(R.id.webview);
//
//        webView.setWebViewClient(webViewClient);
        webView.loadUrl("https://check.torproject.org/");
//
//        final TextView statusTextView = findViewById(R.id.status);

//        registerReceiver(new BroadcastReceiver() {
//            @Override
//            public void onReceive(Context context, Intent intent) {
//                Toast.makeText(context, intent.getStringExtra(TorService.EXTRA_STATUS), Toast.LENGTH_SHORT).show();
//            }
//        }, new IntentFilter(TorService.ACTION_STATUS));
//        startService(new Intent(this, TorService.class));
//
//        GenericWebViewClient webViewClient = new GenericWebViewClient(TorBrowserActivity.this);
//        webViewClient.setRequestCounterListener(new GenericWebViewClient.RequestCounterListener() {
//            @Override
//            public void countChanged(final int requestCount) {
//                runOnUiThread(new Runnable() {
//                    @Override
//                    public void run() {
////                        statusTextView.setText("request count: " + requestCount + " - ");
//                        webView.setWebViewClient(webViewClient);
//                        webView.loadUrl("https://check.torproject.org/");
//                    }
//                });
//            }
//        });


    }

}