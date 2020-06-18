handlers.playerWins = function (args) {
    var updateStatistics = server.UpdatePlayerStatistics({
    PlayFabId: currentPlayerId,
    Statistics: [{
      "StatisticName": "wins",
      "Value": 1
    }]
  });
};
handlers.playerLoses = function (args) {
    var updateStatistics = server.UpdatePlayerStatistics({
    PlayFabId: currentPlayerId,
    Statistics: [{
      "StatisticName": "losses",
      "Value": 1
    }]
  });
};
