const express= require("express");
const bodyParser=require("body-parser")
const app= express();
const https= require("https")

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

app.post("/",function(req,res){
  const firstName= req.body.fname
  const lastName= req.body.lname
  const email= req.body.yemail
  console.log(firstName, lastName, email);
  const data= {
    member:[
      {
        email_address:email,
        status: "subscribed",
        merge_fields: {
          FNAME:firstName,
          LNAME:lastName
        }

      }
    ]
  };

  const jsonData= JSON.stringify(data);
  const url="https://us2.api.mailchimp.com/3.0/lists/e70f68fbce"
  const options={
    method: "POST",
    auth: "aman1:07a69b2894b50b746539a19e1571ae69-us2"
  }

  const request =https.request(url,options,function(response){
    response.on("data",function(data){
      console.log(JSON.parse(data));
    })

  })
  request.write(jsonData);
  request.end();

})
app.get("/",function(req,res){

    res.sendFile(__dirname+"/signup.html");
})

app.listen(3000,function(){

  console.log("server running on port 3000...");
})

    //api key
   //07a69b2894b50b746539a19e1571ae69-us2

   //list id

   //e70f68fbce
