/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();




$(document).ready(function() 
{
    
    $(function() 
    {
        var w = $(window).width();
        var mittenW = parseInt(w*0.80);   
                
        var ritarea = document.getElementById("rityta");
        var oldW = ritarea.width;
        var oldH = ritarea.height;
        var scaleW = oldW / mittenW;  
        var h = $(window).height();
        var scaleH = oldH / h;
        
        $("#rityta").css("width", mittenW + "px"); 
        var ritarea = document.getElementById("rityta");
        $("#rityta").css("height", h + "px"); 
        var rityta1 = new RoboroCanvas("rityta");
        rityta1.scale(scaleW, scaleH);        
        
        var kant = parseInt(w*0.10);
        $("#storCirkel").css("width", kant + "px");
        $("#storCirkel").css("height", kant + "px");
        $("#litenCirkel").css("width", kant + "px");
        $("#litenCirkel").css("height", kant + "px");
        $("#storRekt").css("width", kant + "px");
        $("#storRekt").css("height", kant + "px");
        $("#litenRekt").css("width", kant + "px");
        $("#litenRekt").css("height", kant + "px");
        
        var rityta2 = new RoboroCanvas("canvasCustom");

        rityta2.fill("black");
        rityta2.circle(25,25,25,"black");
        rityta2.circle(15, 15, 5, "red");
        rityta2.circle(30, 10, 5, "blue");
        rityta2.circle(42, 17, 5, "yellow");
        rityta2.circle(37, 35, 5, "green");
        rityta2.circle(25, 40, 5, "cyan");
        rityta2.circle(13, 28, 5, "purple");
    
        var storC = new RoboroCanvas("storCirkel");
        storC.circle(50, 50, 50, "black");
        var litenC = new RoboroCanvas("litenCirkel");
        litenC.circle(50, 50, 20, "black");
        var storR = new RoboroCanvas("storRekt");
        storR.rectangle(25, 25, 50, 50, "black");
        var litenR = new RoboroCanvas("litenRekt");
        litenR.rectangle(40, 40, 20, 20, "black");

    
        var rityta = new RoboroCanvas("rityta");
        rityta.updatesPerSecond = 100;
        rityta.update = function()
        { 
            with (rityta)
            {
            
                if (mouse.left)
                {
                    if (isCircle)
                    {
                    circle(mouse.x, mouse.y, penSize, penColor);            
                    }
                    else
                    {
                        rectangle(mouse.x, mouse.y, penSize, penSize, penColor);
                    }
                }
            }
        }   
    });
});


var penColor = "black";
var penSize = 5;
var isCircle = true;

function smallCClick()
{
    penSize = 5;
    isCircle = true;
}

function largeCClick()
{
    penSize = 15;
    isCircle = true;
}

function smallRClick()
{
    penSize = 5;
    isCircle = false;
}

function largeRClick()
{
    penSize = 15;
    isCircle = false;
    
}

function redClick()
{
    penColor = "red";
}

function blueClick()
{
    penColor = "blue";
}

function greenClick()
{
    penColor="green";
    
}

function yellowClick()
{
    penColor = "yellow";
}

function whiteClick()
{
    penColor = "white";
}

function blackClick()
{
    penColor = "black";
}

function customColor()
{
    var col = prompt("Ange ny färg");
    penColor = col;
}

