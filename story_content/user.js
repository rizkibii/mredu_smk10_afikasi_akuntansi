window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
var getKeyDown = player.getKeyDown;
var keydown = player.keydown;
var keyup = player.keyup;
window.Script532 = function()
{
  var player = GetPlayer();
var nama = player.GetVar ("Nama")
var nilaigame3 = player.GetVar ("NilaiGame3")
var leaderboard = "https://docs.google.com/forms/d/e/1FAIpQLSdwlhW0yyy1MlJQQ5L9zo61zxNBWvh38zw-zeCE2mpv7MgsHg/formResponse?usp=pp_url&entry.1014167136="
player.SetVar("ScoreboardURL", leaderboard+nama+"&entry.1350455264="+nilaigame3)
}

window.Script533 = function()
{
  var player = GetPlayer();
var nama = player.GetVar ("Nama")
var nilaigame2 = player.GetVar ("NilaiGame2")
var leaderboard = "https://docs.google.com/forms/d/e/1FAIpQLScrDz1ngJS6YqBlQM_E4LH2eoBnx6dFhrtc2mQt3XykWH-Oig/formResponse?usp=pp_url&entry.1014167136="
player.SetVar("ScoreboardURL", leaderboard+nama+"&entry.1350455264="+nilaigame2)
}

window.Script534 = function()
{
  var player = GetPlayer();
var nama = player.GetVar ("Nama")
var nilaigame1 = player.GetVar ("NilaiGame1")
var leaderboard = "https://docs.google.com/forms/d/e/1FAIpQLSe5wvtG5cXfeCKRjQ2q0126MTv5hHOG08bf8SdEQ1TjYj3gYA/formResponse?usp=pp_url&entry.1014167136="
player.SetVar("ScoreboardURL", leaderboard+nama+"&entry.1350455264="+nilaigame1)
}

window.Script535 = function()
{
  var player = GetPlayer();
var nama = player.GetVar ("Nama")
var nilaigame5 = player.GetVar ("NilaiGame5")
var leaderboard = "https://docs.google.com/forms/d/e/1FAIpQLSdZKhmjpCrIGnah7E0pkWVtHzo6p_X8auIiY6oztwmODDusfQ/formResponse?usp=pp_url&entry.1014167136="
player.SetVar("ScoreboardURL", leaderboard+nama+"&entry.1350455264="+nilaigame5)
}

window.Script536 = function()
{
  var player = GetPlayer();
var nama = player.GetVar ("Nama")
var nilaigame4 = player.GetVar ("NilaiGame4")
var leaderboard = "https://docs.google.com/forms/d/e/1FAIpQLScj9rdxqZ5VVAQ4ewtIG6MriP2TNMdcCtfqPjUaxZsi4Q3AwA/formResponse?usp=pp_url&entry.1014167136="
player.SetVar("ScoreboardURL", leaderboard+nama+"&entry.1350455264="+nilaigame4)
}

};
