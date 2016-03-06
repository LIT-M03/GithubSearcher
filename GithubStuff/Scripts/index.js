//Abstract
//Interfaces
//Sessions
//Cookies
//Delegates
//Func<T>
//Generics
//Javascript Callbacks
//Extension Methods
//Dictionary

$(function () {
    var data;
    var starsAsc = false;
    var watchAsc = false;
    $("#search").on('click', function () {
        //$.post("/home/getboth", { username: $("#username").val() }, function (results) {
        //    data = results;
        //    fillResults(results);
        //});
        var parameters = { username: $("#username").val() };
        $.post("/home/getuser", parameters, function(user) {
            $.post("/home/getrepos", parameters, function (repos) {
                data = { User: user, Repos: repos };
                fillResults(data);
            });
        });
        //var counter = 0;
        //data = {};
        //$.post("/home/getuser", parameters, function (user) {
        //    counter++;
        //    data.User = user;
        //    if (counter === 2) {
        //        fillResults(data);
        //    }
        //});
        //$.post("/home/getrepos", parameters, function (repos) {
        //    counter++;
        //    data.Repos = repos;
        //    if (counter === 2) {
        //        fillResults(data);
        //    }
        //});



    });

    function fillResults(results) {
        $("#userInfo").text(results.User.Name + " " + results.User.Location + " " + results.User.Followers);
        $("table tr:gt(0)").remove();
        results.Repos.forEach(function (repo) {
            $("table").append($("<tr><td>" + repo.Name + "</td><td>" + repo.Description + "</td><td>" + repo.Stars + "</td><td>" + repo.Watchers + "</td></tr>"));
        });
    }

    $("#sortStars").on('click', function () {
        if (!data) {
            return;
        }

        data.Repos.sort(function (a, b) {
            return starsAsc ? a.Stars - b.Stars : b.Stars - a.Stars;
        });
        starsAsc = !starsAsc;
        fillResults(data);
    });

    $("#sortWatchers").on('click', function () {
        if (!data) {
            return;
        }

        data.Repos.sort(function (a, b) {
            return watchAsc ? a.Watchers - b.Watchers : b.Watchers - a.Watchers;
        });
        watchAsc = !watchAsc;
        fillResults(data);
    });

    //function addRow(repo) {

    //}
});