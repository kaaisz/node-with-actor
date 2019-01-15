var actors = require('comedy');
var vorpal = require('vorpal');
var clc = require("cli-color");

var error = clc.red.bold;
var warn = clc.yellow;
var notice = clc.blue;

function StartApplication()
{
  StartActors();
}

function StopApplication()
{}

function StartActors()
	{
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

function StopActors()
{}



function ApplicationStartup()
  {
  console.log(notice("================================================="));
  console.log(notice("STARTING SERVER"));
  console.log(notice("================================================="));
  console.log(error("Error!: Errors will appear in this color"));
	console.log(warn("Warning: Warnings will appear in this color"));
	console.log(notice("Notice: Will appear in this color"));
  StartActors();
  }



ApplicationStartup();