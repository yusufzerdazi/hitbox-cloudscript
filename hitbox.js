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
    if(currentStatistics.Statistics.length == 2 && currentStatistics.Statistics[1].Value != 0){
        var updateStatistics = server.UpdatePlayerStatistics({
            PlayFabId: currentPlayerId,
            Statistics: [{
              "StatisticName": "winloss",
              "Value": currentStatistics.Statistics[0].Value / currentStatistics.Statistics[1].Value
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
    if(currentStatistics.Statistics.length == 2 && currentStatistics.Statistics[1].Value != 0){
        var updateStatistics = server.UpdatePlayerStatistics({
            PlayFabId: currentPlayerId,
            Statistics: [{
              "StatisticName": "winloss",
              "Value": currentStatistics.Statistics[0].Value / currentStatistics.Statistics[1].Value
            }]
        });
    }
};
