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
    var wins = currentStatistics.filter(s => s.StatisticName == "wins");
    var losses = currentStatistics.filter(s => s.StatisticName == "losses");
    if(wins && losses){
        var updateStatistics = server.UpdatePlayerStatistics({
            PlayFabId: currentPlayerId,
            Statistics: [{
              "StatisticName": "winloss",
              "Value": wins / losses
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
    var wins = currentStatistics.filter(s => s.StatisticName == "wins");
    var losses = currentStatistics.filter(s => s.StatisticName == "losses");
    if(wins && losses){
        var updateStatistics = server.UpdatePlayerStatistics({
            PlayFabId: currentPlayerId,
            Statistics: [{
              "StatisticName": "winloss",
              "Value": wins / losses
            }]
        });
    }
};
