class Client{
    private Name: string;
    private Phone: string;

    constructor(name:string,phone:string){
        this.Name= name;
        this.Phone = phone;
    }

    showClinetInfo():void{
        console.log(`Name: ${this.Name}\n Phone number : ${this.Phone}`)
    }

    getName():string{
        return this.Name;
    }

    setName(value:string): void{
        if(value !== this.Name){
            this.Name = value;
        }
    }
}


class Events{

    private ClientList: Client[] = [];

    private id: number = 0
    private title:string;
    static personCounter:number = 0;
    private place: string;
    private d: string;

    constructor(title: string, place: string, d: string){
        this.id ++;
        this.title = title;
        this.place = place;
        this.d = d;
    }

    AddNewClient(client:Client):void{
        this.ClientList.unshift(client)
        Events.personCounter = this.ClientList.length;
    }

    showEvent(): void{
        console.log(`Title ${this.title} \n Place: ${this.place} \n Data: ${this.d}`)
    }
    getClientList(): Client[]{
        return this.ClientList;
    }
    getD(): string{
        return this.d;
    }

}


class EventService{

    EventList: Events[]=[];

    AddNewEvent(event: Events): void{
        this.EventList.unshift(event);
    }

    ShowEvents():void{
        
            this.EventList.forEach(item => {
                item.showEvent()
            })
        
    }

    DeleteEvent(id:number):void{
        this.EventList = [...this.EventList.slice(0,id) , ...this.EventList.slice(id +1)] 
    }

    ClearEvents(): void{
        this.EventList = [];
        console.log('EventList is empty!')
    }

    findEventsByDate(dayMonth: string):void {
		this.EventList.forEach((item: Events): void => {
			if (item.getD() === dayMonth) console.log(item);
		} )
	}

	findEventsByClient(clntName: string): void {
        
		this.EventList.forEach( (item: Events): void => {
            item.getClientList().forEach((clnt: Client) => {
                if(clnt.getName() === clntName){console.log(item)}
            }


            )
        })
    
    }
			

}

let bob = new Client('Bob', '0950591455')
let nick = new Client('Nick', '0955670812')
let roy = new Client('Roy', '0966547832')
let john = new Client('John', '0666301277')

let jsConf = new Events('Js Best practice', 'It Step' , "23.10")

jsConf.AddNewClient(bob)
jsConf.AddNewClient(nick)

const service = new EventService();
service.AddNewEvent(jsConf)


let iForum = new Events("iForum 2021", "Lviv", "01.12");
iForum.AddNewClient(roy);
iForum.AddNewClient(bob);
iForum.AddNewClient(nick);
iForum.AddNewClient(john);
service.AddNewEvent(iForum);


console.log(`Clients count: ${Events.personCounter}`);

service.ShowEvents();


// Очищення списку подій  ClearEvents()
// Пошук подій замовлених на певну датy  findEventsByDate()
// Видалення події  DeleteEvent()
// Пошук подій замовлених певним клієнтом findEventsByClient()


