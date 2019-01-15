// lifecycle - born

const actors = require('comedy');
const dddd = require('comedy');
const vorpal = require('vorpal');
const clc = require('cli-color');

const err = clc.red.bold;
const warn = clc.yellow;
const notice = clc.blue;

const StartApplication = () => {
  // invoke to start actor system (code is written below)
  StartActors();
}

const StopApplicaiton = () => {

}

const StartActors = () => {
  //actors.rootActor is imported from comedy package
  console.log('starting actors');
  actors()
    .rootActor()
    .then(rootActor => 
            //import baseactor
            rootActor.createChild('/actors/BaseActor')
          
          )
    .then(myActor => 
            //import baseactor - our actor is ready
            myActor.send('testMethod', '50')

          );
    console.log(notice('finished making BaseActor'));


  
    console.log(notice('finished making PrimeFinderActor'));
}

const StopActors = () => {

}

const ApplicationStartup = () => {
  console.log(notice("============================="));
  console.log(notice("STARTING SERVER"));
  console.log(notice("============================="));
  console.log(err("error! as a red one"));
  console.log(warn("warn as a yellow one"));
  console.log(notice("notice as a blue one"));

  StartActors();
}

ApplicationStartup();