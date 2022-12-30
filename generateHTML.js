const generateHTML=(data)=>{
console.log(data)

return`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BRIAN PORTFOLIO GENERATOR</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css">
<link rel="stylesheet" href="style.css"/>
    
</head>
<body>
    

    <h1>BRIANs PORTFOLIO</h1>
<div class="container">
    <div class="row">
        <div class="col-md-6">
            <img src="C:\Users\bajeb\OneDrive\Pictures\Saved Pictures\avatar.jfif" class='img-fluid' alt="brian-avatar">
        </div>
            <div class="col-md-6">

                <h2>Mlwaukee</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, impedit similique, numquam pariatur veritatis dolores tempora illum alias voluptatum praesentium perspiciatis debitis? Quae sit eaque laborum beatae voluptates, dolorem deleniti!</p>

                <a href="#">
                <i class="bi bi-github fs-3"></i> 
            </a>
                <a href="'#">
                    <i class="bi bi-linkedin fs-3"></i>  
                </a>        

 

</body>
</html>

`
}

module.exports=generateHTML