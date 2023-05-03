function stickyheaddsadaer(obj) {
    if($(obj).is(":checked")){
        permaStopTimer()
        $("#page-header-inner").addClass("sticky");
    }else{
        restartTimer()//when not checked
        $("#page-header-inner").removeClass("sticky");
    }
  }