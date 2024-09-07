<script>
   export let data;
   console.log(data);
   async function bookEvent(index) {
      var selectedEvent = eventList[index];
      selectedEvent.userid = data.userData.id;
     
      console.log(selectedEvent);
      console.log(data.bookedEvents);
       
      var payload = JSON.stringify(selectedEvent);
      var submited = await fetch("/api/bookEvent",{"method":"POST","body":payload});
   }
   async function signOut(){

      await fetch("/api/logout",{"method":"POST"});
      location.reload();
      
    }    

   let bookedEvents = data.bookedEvents;

    var eventList=[ 
   
       {img:"aladdin.webp",ename:"Aladdin",time:"7:pm",location:"Al Janoub",description:"ghjgvjhvghj"},
       {img:"daypassatresort.webp", ename:"Little shop of horrors",time:"10:pm",location:"THIS Theatre",description:"ghjgvjhvghj"},
       {img:"littleshopofhorrors.webp",ename:"Day pass at Majlies Resort",time:"10 am onwards",location:"Sealine",description:"ghjgvjhvghj"},
       {img:"formula1.webp",ename:"FORMULA 1 QATAR AIRWAYS QATAR GRAND PRIX 2024",time:"10 am onwards",location:" LUSAIL INTERNATIONAL CIRCUIT",description:"ghjgvjhvghj"},
       {img:"youasked.webp",ename:"YOu asked",time:"7:pm",location:"ggghgchc",description:"ghjgvjhvghj"},
       {img:"kidspartyorganisers.webp",ename:"party organiser",time:"7:pm",location:"Al Janoub",description:"ghjgvjhvghj"},
       
      ];

</script>
<div class = "welcomebox">
<h1>HI {data.userData.name } Welcome to Dashboard </h1>
<button on:click={signOut}> Log out</button>
</div>
<h1> BOOKED EVENTS</h1>
<div class ="boxcontainer">
   {#each bookedEvents as list}
   
   <div class="eventbox">
      <div > <img src="/images/{list.img}"></div>
      <div>{list.ename}</div>
      <div> {list.time}</div>
      <div>{list.location}</div>

      <div>{list.description}</div>
      
   </div>
   
   
   {/each}
   </div>
<h1> ALL EVENTS </h1>
<div class ="boxcontainer">
{#each eventList as list,listIndex}

<div class="eventbox">
   <div > <img src="/images/{list.img}"></div>
   <div>{list.ename}</div>
   <div>{list.location}</div>
   <div>{list.description}</div>
   
   <button class="buttonclass" on:click={()=>[bookEvent(listIndex)]}> BOOK NOW</button>
</div>


{/each}
</div>
<style>

.eventbox{

   width:250px;
   height:200px;
   border:3px solid black;

}
.boxcontainer{
   display:flex;
   column-gap: 20px;
   justify-content: center;

   
}
.eventbox img{
   width:100%;

}
.welcomebox{
   display:flex;
   justify-content: space-between;
   height: 100px;
   align-items: center;
}

</style>


