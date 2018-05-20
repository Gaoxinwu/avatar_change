/**
 * Created by Administrator on 2018/5/11.
 */
//$('#image').cropper({
//    aspectRatio: 1,
//    viewMode:0,
//    preview:".preview",
//    crop: function (e) {
//        //console.log(e);
//    }
//});
var URL = window.URL || window.webkitURL;
$("#uploadImg").on("change",function(){
    var files=this.files;
    var file,uploadedImageURL ;
    console.log(files)
    if(files && files.length){
        file=files[0];
        if (/^image\/\w+$/.test(file.type)) {
            var reader = new FileReader();
            reader.readAsDataURL(file);
            // 监听上传完成
            reader.onload = function(){
                // 拿到base64的路径
                var imgSrc = reader.result;
                console.log(imgSrc);

                // 改变img的src属性值
                $("#image").src=imgSrc;
                //imgObj.src=src;

        }
    }
    }
});


var c=document.getElementById("imgDone");
var cxt=c.getContext("2d");
var img=new Image();
img.src="img/cat.jpg";
cxt.drawImage(img,0,0);

