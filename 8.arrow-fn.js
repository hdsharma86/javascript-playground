const event = {
    name: "Birthday Party",
    guestList: ['Hardev', 'Naveen', 'Sunil'],
    printGuestList(){
        console.log("Guest list for "+this.name);
        this.guestList.forEach((guest)=>{
            console.log(guest+" attending this "+this.name);
        });
    }
};

event.printGuestList();