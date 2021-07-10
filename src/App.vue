<template>
  <router-view/>
</template>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  :root {
    /* Light Theme Mode */
    --lt-white      : #F4F6FD;
    --lt-blue-light : #ADBAEB;
    --lt-blue       : #076aff;
    --lt-navy       : #0a155a;
    --lt-purple-neon: #D103FC;
    --lt-grey-light : #e5e7f0;
    --lt-grey       : #9D9AB4;
    --lt-grey-dark  : #757575;
    --lt-black      : #020417;
    
    /* Dark Theme Mode */
    --dt-blue-neon  : #4F74FF;
    --dt-blue       : #3D47AF;
    --dt-blue-navy  : #0A155A;
    --dt-purple-neon: #D103FC;
    --dt-grey-light : #BBC2D8;
    --dt-grey       : #7D80AA;
    --dt-grey-dark  : #48466B;
    --dt-black      : #010319;
  }
</style>