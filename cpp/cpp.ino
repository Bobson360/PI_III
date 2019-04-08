///#include <WiFiManager.h>
//
//// ############# LIBRARIES ############### //
//
//#include <ESP8266WiFi.h>
//#include <ESP8266HTTPClient.h>
//
//
//
//
//
//// ############# VARIABLES ############### //
//
///*
//const char* SSID = ""; // rede wifi
//const char* PASSWORD = ""; // senha da rede wifi
//*/
//String BASE_URL = "http://192.168.15.16:3000/";
//
//// ############# PROTOTYPES ############### //
//
//void initSerial();
//void initWiFi();
//void httpRequest(String path);
//
//// ############### OBJECTS ################# //
///*
//WiFiClient client;
//*/
//HTTPClient http;
//
//// ############## SETUP ################# //
//
//void setup() {
//  initSerial();
//
//  
//  // ############# CONN WIFI ############### //
//
//  WiFiManager wifiManager;
//  wifiManager.autoConnect("AutoConnectAP");
//  Serial.println("connected...yeey :)");
//  
//  
//  // initWiFi();
//}
//
//// ############### LOOP ################# //
//
//void loop() {
//  Serial.println("[GET] /sensors - sending request...");
//  Serial.println("");
//
//  httpRequest("sensors");
//  delay(1000);
//  httpRequest2("sensors");
//
//  Serial.println("");
//  
//
//}
//
//// ############# HTTP REQUEST ################ //
//
//void httpRequest(String path)
//{
//  String payload = makeRequest(path);
//
//  if (!payload) {
//    return;
//  }
//
//  Serial.println("##[RESULT]## ==> " + payload);
//
//}
//void httpRequest2(String path)
//{
//  String payload = makeRequest2(path);
//
//  if (!payload) {
//    return;
//  }
//
//  Serial.println("##[RESULT]## ==> " + payload);
//
//}
//
//String makeRequest(String path)
//{
//  http.begin(BASE_URL + path);
//  int httpCode = http.GET();
//
//  if (httpCode < 0) {
//    Serial.println("request error - " + httpCode);
//    return "";
//
//  }
//
//  if (httpCode != HTTP_CODE_OK) {
//    return "";
//  }
//
//  String response =  http.getString();
//  http.end();
//
//  return response;
//}
//
//String makeRequest2(String path)
//{
//  http.begin(BASE_URL + path);
//  http.addHeader("content-type", "application/x-www-form-urlencoded");
//  String rands = String(random(1000));
//  //Serial.println(rands);
//  //String body = "id="+rands+"&name=Robson&type=dev&value=10";
//  String body = "id=386&name=Robson&type=dev&value=10";
//
//  int httpCode = http.POST(body);
//
//  if (httpCode < 0) {
//    Serial.println("request error - " + httpCode);
//    return "";
//
//  }
//}
//// ###################################### //
//
//// implementacao dos prototypes
//
//void initSerial() {
//  Serial.begin(115200);
//}
///*
//void initWiFi() {
//  delay(10);
//  Serial.println("Conectando-se em: " + String(SSID));
//
//  WiFi.begin(SSID, PASSWORD);
//  while (WiFi.status() != WL_CONNECTED) {
//    delay(100);
//    Serial.print(".");
//  }
//  Serial.println();
//  Serial.print("Conectado na Rede " + String(SSID) + " | IP => ");
//  Serial.println(WiFi.localIP());
//}
//*/

// ############# LIBRARIES ############### //

#include <ESP8266WiFi.h>
#include <ESP8266HTTPClient.h>

#define button D0
#define led    D1

int outputpin= A0;

// ############# VARIABLES ############### //

const char* SSID = "PeCRo_2.4"; // rede wifi
const char* PASSWORD = "Pedro@2017"; // senha da rede wifi

String BASE_URL = "http://192.168.15.16:3000/";

// ############# PROTOTYPES ############### //

void initSerial();
void initWiFi();
void httpRequest(String path);

// ############### OBJECTS ################# //

WiFiClient client;
HTTPClient http;

// ############## SETUP ################# //

void setup() {
  pinMode(button, INPUT);
  pinMode(led, OUTPUT);
  initSerial();
  initWiFi();
}

float vref = 3.3;
float resolution = vref/1023;
// ############### LOOP ################# //
int count =0;
void loop() {

  
//int analogValue = analogRead(outputpin);

/*
 * 
float millivolts = (analogValue/1024.0) * 3300; //3300 is the voltage provided by NodeMCU
float celsius = millivolts/10;
Serial.print("in DegreeC=   ");
Serial.println(celsius);
*/

float temperature = analogRead(A0);
 temperature = (temperature*resolution);
 temperature = temperature*100;
 Serial.println(temperature);

//---------- Here is the calculation for Fahrenheit ----------//

count++;

if(digitalRead(button) || count>= 5570){
  digitalWrite(led, HIGH);
  Serial.println(count);
  httpRequest("sensors", temperature);
  Serial.println("[POST] /sensors - sending request...");
  Serial.println("");
  delay(1000);
  count = 0;
  digitalWrite(led, LOW);
}

  Serial.println(count);
  delay(10);

}

// ############# HTTP REQUEST ################ //

void httpRequest(String path, float temp)
{
  String payload = makeRequest(path, temp);

  if (!payload) {
    return;
  }

  Serial.println("##[RESULT]## ==> " + payload);

}

String makeRequest(String path, float temp)
{
  http.begin(BASE_URL + path);
  http.addHeader("content-type", "application/x-www-form-urlencoded");
  String tempToString = String(temp);
  String body = "id=7890&name=NTC&type=temperature&value="+tempToString+"";

  int httpCode = http.POST(body);

  if (httpCode < 0) {
    Serial.println("request error - " + httpCode);
    return "";

  }

  if (httpCode != HTTP_CODE_OK) {
    return "";
  }

  String response =  http.getString();
  http.end();

  return response;
}

// ###################################### //

// implementacao dos prototypes

void initSerial() {
  Serial.begin(115200);
}

void initWiFi() {
  delay(10);
  Serial.println("Conectando-se em: " + String(SSID));

  WiFi.begin(SSID, PASSWORD);
  while (WiFi.status() != WL_CONNECTED) {
    delay(100);
    Serial.print(".");
  }
  Serial.println();
  Serial.print("Conectado na Rede " + String(SSID) + " | IP => ");
  Serial.println(WiFi.localIP());
}
