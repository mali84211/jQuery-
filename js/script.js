let sideBarInnerWidth = $(".sections-nav").innerWidth();

  $(".sideBar").css("left", -sideBarInnerWidth);
  $(".openBtn").on("click", function () {
    $(".sideBar").animate({ left: "0px" }, 500);
  });

  $(".closeBtn").on("click", function () {
    $(".sideBar").animate({ left: -sideBarInnerWidth }, 500);
  });

  const speakerInfo = $(".speaker p");
  speakerInfo.eq(1).css("display", "none");
  speakerInfo.eq(2).css("display", "none");
  speakerInfo.eq(3).css("display", "none");

    $(".speaker h2").on("click", function () {
    const speaker = $(this);
    speaker.next().slideToggle(500);
    $(".speakerInfo").not(speaker.next()).slideUp(500);
  });

  const targetDate = new Date("2026-07-27T23:59:59").getTime();

  const countdownInterval = setInterval(function () {
    const currentDate = new Date().getTime();
    const timeRemaining = targetDate - currentDate;
    if (timeRemaining <= 0) {
      clearInterval(countdownInterval);
      $(".countdown .row").html("Countdown expired");
      return;
    }
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    $(".days h3").html(`${days} d`);
    $(".hours h3").html(`${hours} h`);
    $(".mins h3").html(`${minutes} m`);
    $(".secs h3").html(`${seconds} s`);
  }, 1000);

  const textArea = $(".contact textarea");
  const charsCount = $("#chars");
  const charsText = $("#charsText");
  const maxChars = 100;

  textArea.on("input", function () {
    const remainingChars = maxChars - textArea.val().length;
    if (remainingChars > -1) {
      charsCount.text(remainingChars).css("color", "green");
      charsText.text("characters remaining");
    } else {
      charsText.text("");
      charsCount
        .text(
          `${remainingChars} You have exceeded the maximum number of characters allowed!`
        )
        .css("color", "red");
    }
  });