var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var Client = /** @class */ (function () {
    function Client(name, phone) {
        this.Name = name;
        this.Phone = phone;
    }
    Client.prototype.showClinetInfo = function () {
        console.log("Name: " + this.Name + "\n Phone number : " + this.Phone);
    };
    Client.prototype.getName = function () {
        return this.Name;
    };
    Client.prototype.setName = function (value) {
        if (value !== this.Name) {
            this.Name = value;
        }
    };
    return Client;
}());
var Events = /** @class */ (function () {
    function Events(title, place, d) {
        this.ClientList = [];
        this.id = 0;
        this.id++;
        this.title = title;
        this.place = place;
        this.d = d;
    }
    Events.prototype.AddNewClient = function (client) {
        this.ClientList.unshift(client);
        Events.personCounter = this.ClientList.length;
    };
    Events.prototype.showEvent = function () {
        console.log("Title " + this.title + " \n Place: " + this.place + " \n Data: " + this.d);
    };
    Events.prototype.getClientList = function () {
        return this.ClientList;
    };
    Events.prototype.getD = function () {
        return this.d;
    };
    Events.personCounter = 0;
    return Events;
}());
var EventService = /** @class */ (function () {
    function EventService() {
        this.EventList = [];
    }
    EventService.prototype.AddNewEvent = function (event) {
        this.EventList.unshift(event);
    };
    EventService.prototype.ShowEvents = function () {
        this.EventList.forEach(function (item) {
            item.showEvent();
        });
    };
    EventService.prototype.DeleteEvent = function (id) {
        this.EventList = __spreadArray(__spreadArray([], this.EventList.slice(0, id), true), this.EventList.slice(id + 1), true);
    };
    EventService.prototype.ClearEvents = function () {
        this.EventList = [];
        console.log('EventList is empty!');
    };
    EventService.prototype.findEventsByDate = function (dayMonth) {
        this.EventList.forEach(function (item) {
            if (item.getD() === dayMonth)
                console.log(item);
        });
    };
    EventService.prototype.findEventsByClient = function (clntName) {
        this.EventList.forEach(function (item) {
            item.getClientList().forEach(function (clnt) {
                if (clnt.getName() === clntName) {
                    console.log(item);
                }
            });
        });
    };
    return EventService;
}());
var bob = new Client('Bob', '0950591455');
var nick = new Client('Nick', '0955670812');
var roy = new Client('Roy', '0966547832');
var john = new Client('John', '0666301277');
var jsConf = new Events('Js Best practice', 'It Step', "23.10");
jsConf.AddNewClient(bob);
jsConf.AddNewClient(nick);
var service = new EventService();
service.AddNewEvent(jsConf);
var iForum = new Events("iForum 2021", "Lviv", "01.12");
iForum.AddNewClient(roy);
iForum.AddNewClient(bob);
iForum.AddNewClient(nick);
iForum.AddNewClient(john);
service.AddNewEvent(iForum);
console.log("Clients count: " + Events.personCounter);
service.ShowEvents();
// Очищення списку подій  ClearEvents()
// Пошук подій замовлених на певну датy  findEventsByDate()
// Видалення події  DeleteEvent()
// Пошук подій замовлених певним клієнтом findEventsByClient()
