handlers.playerWins = function (args) {
    var updateStatistics = server.UpdatePlayerStatistics({
        PlayFabId: currentPlayerId,
        Statistics: [{
          "StatisticName": "wins",
          "Value": 1
        }]
    });
    var currentStatistics = server.GetPlayerStatistics({
        PlayFabId: currentPlayerId,
        StatisticNames: ["wins", "losses"]
    });
    if(currentStatistics.length == 2 && currentStatistics[1].Value != 0){
        var updateStatistics = server.UpdatePlayerStatistics({
            PlayFabId: currentPlayerId,
            Statistics: [{
              "StatisticName": "winloss",
              "Value": currentStatistics[0] / currentStatistics[1]
            }]
        });
    }
};
handlers.playerLoses = function (args) {
    var updateStatistics = server.UpdatePlayerStatistics({
        PlayFabId: currentPlayerId,
        Statistics: [{
          "StatisticName": "losses",
          "Value": 1
        }]
    });
    var currentStatistics = server.GetPlayerStatistics({
        PlayFabId: currentPlayerId,
        StatisticNames: ["wins", "losses"]
    });
    if(currentStatistics.length == 2 && currentStatistics[1].Value != 0){
        var updateStatistics = server.UpdatePlayerStatistics({
            PlayFabId: currentPlayerId,
            Statistics: [{
              "StatisticName": "winloss",
              "Value": currentStatistics[0] / currentStatistics[1]
            }]
        });
    }
};
