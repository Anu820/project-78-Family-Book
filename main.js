var images = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcKNQjJOKIvYhRZx2HzZxa83dtC_UGuf0HJMeOUzEpt4mhZGMTujyNYce4GT_vxGMumTM&usqp=CAU"
 , "https://i.pinimg.com/originals/bc/65/21/bc652139fa478f46229cc1b6c4d4800a.jpg" , "https://cdn2.vectorstock.com/i/1000x1000/32/86/cartoon-old-woman-with-a-cane-vector-25043286.jpg" , "https://cdn.imgbin.com/25/8/4/imgbin-cartoon-business-man-man-j5cT3kaAxgNzRJTyjv5BTzPcS.jpg" , "https://i.pinimg.com/originals/86/3b/e0/863be085cb4b90511cb6ea3cfed99563.jpg" , "https://img.freepik.com/free-vector/cute-happy-smiling-child-isolated-white_1308-32243.jpg?size=338&ext=jpg" , "https://i.pinimg.com/236x/aa/42/7a/aa427a67d5dc8bc31629fbe50cc62abd.jpg" , "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWx81Jdy8tssZJWtmNIUMjEi2ozPXeEM6eZH841NBVSG8PEZACu0CePmtTKCwMmXmGKC4&usqp=CAU", ];

var names = ["Family Book" , "Ranvir Shingh" , "Ruchi Singh" , "Rockey Shingh" , "Aliza Shingh" , "Son1 Shingh" , "Daughter1 Shingh" , "Son2 Shingh" , ];

var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 7
    if(i > numbers_of_family_member_in_array )
    {
       i = 0;
    }
    
    var updatedImage = images[i];
    var updatedName = names[i];
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}

