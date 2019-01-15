const actors = require('comedy');
const vorpal = require('vorpal');
const clc = require("cli-color");

const error = clc.red.bold;
const warn = clc.yellow;
const notice = clc.blue;

const StartApplication = () => {
  StartActors();
}

const StopApplication = () => {}

const StartActors = () =>	{
    console.log(notice("STARTING ACTORS"));
    actors()
      .rootActor() // Get a root actor reference.
      .then(rootActor =>

            rootActor.createChild('/actors/BaseActor') // Create a module-defined child actor.
          )
      .then(myActor =>
        // Our actor is ready, we can send messages to it.
        myActor.send('testMethod', '50'))

  console.log(notice("FINISHED STARTING ACTORS"));
}

const StopActors = () => {}



const ApplicationStartup = () => {
  console.log(notice("================================================="));
  console.log(notice("STARTING SERVER"));
  console.log(notice("================================================="));
  console.log(error("Error!: Errors will appear in this color"));
	console.log(warn("Warning: Warnings will appear in this color"));
	console.log(notice("Notice: Will appear in this color"));
  StartActors();
}



ApplicationStartup();