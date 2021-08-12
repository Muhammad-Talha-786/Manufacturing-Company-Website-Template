function get_number(num)
{
    var user_input = document.getElementById("result"); 
    user_input.value += num;
}

function clear_screen()
{
    var user_input = document.getElementById("result"); 
    user_input.value = "";
}

function final_result()
{
    var user_input = document.getElementById("result"); 
    user_input.value = eval(user_input.value);
}