$(function()
{
    CWF.InitializeBlocks();
});

$(window).on('resize', function()
{
    let dialog = $('#dialog');
    if(dialog.length > 0)
    {
        CWF.FitDialog(dialog);
    }
});
