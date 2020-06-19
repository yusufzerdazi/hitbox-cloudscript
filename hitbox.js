handlers.playerWins = function (args) {
    var updateStatistics = server.UpdatePlayerStatistics({
        PlayFabId: currentPlayerId,
        Statistics: [{
          "StatisticName": "wins",
          "Value": args
        }]
    });
    var updateStatistics = server.UpdatePlayerStatistics({
        PlayFabId: currentPlayerId,
        Statistics: [{
          "StatisticName": "losses",
          "Value": 0
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
              "Value": Math.round(1000 * currentStatistics.Statistics[0].Value / currentStatistics.Statistics[1].Value)
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
    var updateStatistics = server.UpdatePlayerStatistics({
        PlayFabId: currentPlayerId,
        Statistics: [{
          "StatisticName": "wins",
          "Value": 0
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
              "Value": Math.round(1000 * currentStatistics.Statistics[0].Value / currentStatistics.Statistics[1].Value)
            }]
        });
    }
};
handlers.playerKills = function (args) {
    var updateStatistics = server.UpdatePlayerStatistics({
        PlayFabId: currentPlayerId,
        Statistics: [{
          "StatisticName": "kills",
          "Value": 1
        }]
    });
};
