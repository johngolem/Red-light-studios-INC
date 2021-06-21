$(document).ready(function () {

    $("#design").click(function () {
        $("#desdesc").toggle();
        $("#design").toggle();
    });
    $("#desdesc").click(function () {
        $("#development").toggle();
        $("#desdesc").toggle();
    });
    $("#development").click(function () {
        $("#devp").toggle();
        $("#development").toggle();
    });
    $("#devp").click(function () {
        $("#development").toggle();
        $("#devp").toggle();
    });
    $("#product").click(function () {
        $("#prd").toggle();
        $("#product").toggle();
    });
    $("#prd").click(function () {
        $("#product").toggle();
        $("#prd").toggle();
    });
    $(".work1").mouseover(function () {
        $(".work1").css('opacity', '0.5');
        $(".Kwasi").show();
        $(".Kwasi").addClass("projects");
    });
    $(".work1").mouseleave(function () {
        $(".work1").css('opacity', '1');
        $(".Kwasi").hide();
    });
    $(".work2").mouseover(function () {
        $(".work2").css('opacity', '0.5');
        $(".Kwadwo").show();
        $(".Kwadwo").addClass("projects");
    });
    $(".work2").mouseleave(function () {
        $(".work").css('opacity', '1');
        $(".Kwadwo").hide();
    });
    $(".work3").mouseover(function () {
        $(".work3").css('opacity', '0.5');
        $(".Kwabena").show();
        $(".Kwabena").addClass("projects");
    });
    $(".work3").mouseleave(function () {
        $(".work3").css('opacity', '1');
        $(".Kwabena").hide();
    });
    $(".work4").mouseover(function () {
        $(".work4").css('opacity', '0.5');
        $(".Kwaku").show();
        $(".Kwaku").addClass("projects");
    });
    $(".work4").mouseleave(function () {
        $(".work4").css('opacity', '1');
        $(".Kwaku").hide();
    });
    $(".work5").mouseover(function () {
        $(".work5").css('opacity', '0.5');
        $(".Kwame").show();
        $(".Kwame").addClass("projects");
    });
    $(".work5").mouseleave(function () {
        $(".work5").css('opacity', '1');
        $(".Kwame").hide();
    });
    $(".work6").mouseover(function () {
        $(".work6").css('opacity', '0.5');
        $(".Abenaa").show();
        $(".Abenaa").addClass("projects");
    });
    $(".work6").mouseleave(function () {
        $(".work6").css('opacity', '1');
        $(".Abenaa").hide();
    });
    $(".work7").mouseover(function () {
        $(".work7").css('opacity', '0.5');
        $(".Adwoa").show();
        $(".Adwoa").addClass("projects");
    });
    $(".work7").mouseleave(function () {
        $(".work7").css('opacity', '1');
        $(".Adwoa").hide();
    });
    $(".work8").mouseover(function () {
        $(".work8").css('opacity', '0.5');
        $(".Akosua").show();
        $(".Akosua").addClass("projects");
    });
    $(".work8").mouseleave(function () {
        $(".work8").css('opacity', '1');
        $(".Akosua").hide();
    });
});