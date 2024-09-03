<h1>Welcome to Dashboard</h1>

<script>
    

    

     var eventList=[ 
    //    <img:"src/lib/images/src/lib/images/aladdin.webp",
        {ename:"Aladdin",time:"7:pm",location:"Al Janoub",description:"ghjgvjhvghj"},
        {ename:"Little shop of horrors",time:"10:pm",location:"THIS Theatre",description:"ghjgvjhvghj"},
        {ename:"Day pass at Majlies Resort",time:"10 am onwards",location:"Sealine",description:"ghjgvjhvghj"}
     ];

</script>
 <div class ="boxcontainer">
{#each eventList as list}
<div class="eventbox">
    <div>{list.ename}</div>
    <div>{list.location}</div>
    <div>{list.description}</div>
    
    <button class="buttonclass"> BOOK NOW</button>
</div>

{/each}
</div>
<style>

.eventbox{

    width:200px;
    height:200px;
    border:3px solid black;

}
.boxcontainer{
    display:flex;
    column-gap: 20px;
    justify-content: center;

    
}
</style>


