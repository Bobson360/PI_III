#define ZCD_PIN    0
#define DIMMER_PIN 13
#define FREQUENCY 60

int freq = FREQUENCY;

float period;  

float intervalo;
float pot;

int led = 13;
int counter = 1;
boolean increment = true;
void interrupcao();

void setup() {
  period  = 1.0 / 60.0;
  intervalo = period / 100.0;
  pot = intervalo;
  
  pinMode(ZCD_PIN,     INPUT);
  pinMode(DIMMER_PIN, OUTPUT);
  Serial.begin(9600);
  Serial.println("INICIANDO CIRCUITO");
  Serial.println(pot, 6);
  attachInterrupt(ZCD_PIN,interrupcao,RISING); //Configurando a interrupção
}

void loop() {
  /*
  digitalWrite(DIMMER_PIN, HIGH);   // turn the LED on (HIGH is the voltage level)
  delay(1);                       // wait for a second
  digitalWrite(DIMMER_PIN, LOW);    // turn the LED off by making the voltage LOW
  delay(1); 
*/



}
 
void interrupcao(){
  if(increment) {
    if(counter <= 100){
        pot = pot + intervalo; 
        Serial.println("incrementa");
        if(counter >= 100){
          increment = false;
        }
    }
    counter++;
  }else if(!increment){
    if(counter >= 0){
        pot = pot - intervalo;  
        Serial.println("decrementa");
        if(counter <= 0){
          increment = true;
        }
        counter--;
  }
  }

  Serial.println(pot*1000000, 6);
  Serial.println(counter);
  Serial.println(increment);
    digitalWrite(DIMMER_PIN, HIGH); 
    delayMicroseconds(pot*1000000);
    digitalWrite(DIMMER_PIN, LOW); 

    
 }
 
