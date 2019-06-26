var utils = require('../lib/utils.js');
var logic = require('./../lib/codingpains-logic');

var AI = {
  info: {
    name: 'Daniel_the_Wise',
    style: 2
  },
  ai: (playerState, enemiesStates, gameEnvironment) => {
    
    var directionToAmmo;
    var kill;
    var move = null

    //Hello this is daniel

    console.log(playerState.ammo)

    if (utils.canKill(playerState, enemiesStates) && playerState.ammo) {
      return 'shoot';
    }

    for (var x = 0; x < enemiesStates.length; x ++) {
      //Avoids enemies
      if (enemiesStates[x].ammo != 0){
        if (enemiesStates[x].position[0] == playerState.position[0] || enemiesStates[x].position[1] == playerState.position[1]) {
          if (enemiesStates[x].position[0] == playerState.position[0]) {
            if (playerState.position[0] == 0) {
              move = 'south'
              if (playerState.direction == 'south'){
                move = 'move'
              }
            }
            if (playerState.position[0] == 12) {
              move = 'north'
              if (playerState.direction == 'north'){
                move = 'move'       
              }
            } 
          }
          if (enemiesStates[x].position[1] == playerState.position[1]) {
            if (playerState.position[1] == 0) {
              move = 'right'
              if (playerState.direction == 'right'){
                move = 'move'
              }
            }

            if (playerState.position[1] == 12) {
              move = 'left'
              if (playerState.direction == 'left'){
                move = 'move'
              }
            }
          }
          console.log(move)
          return move
        }
      } 
      console.log("i am going to die")
    }
    

    // if (utils.canKill(playerState, enemiesStates) && playerState.ammo) {
    //   return 'shoot';
    // }
    // Checks to see if the AI has ammo and if it does not it goes to retreve the ammo


    directionToAmmo = utils.fastGetDirection(playerState.position, logic.getClosestAmmo(playerState, gameEnvironment.ammoPosition));

    if (directionToAmmo !== playerState.direction) return directionToAmmo;
      return 'move';




    if (playerState.position[0] == 0) {
      if (playerState.direction == 'south'){
        move = 'move'
      }
      move = 'south'
    } else if (playerState.position[1] == 12) {
      if (playerState.direction == 'north') {
        move = 'move'
      }
      move = 'north'
    } else if (playerState.position[1] == 0) {
      if (playerState.direction == 'west') {
        move = 'move'
      }
      move = 'west'
    } else if (playerState.position[0] == 12) {
      if (playerState.direction == 'left') {
        move = 'move'
      }
      move = 'left'
    }

    return move

  }
};

module.exports = AI;
