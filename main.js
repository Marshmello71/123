function setup()
{
    video = createCapture(VIDEO)
    video.size(550, 500)

    canvas = createCanvas(550, 500)
    canvas.position(560, 150)

    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on('pose', gotPoses)
}
function draw()
{
    background('#6e7f80')
}
function modelLoaded()
{
    console.log('PoseNet is Initialized')
}
function gotPoses()
{
    if (results.length > 0)
    {
        console.log(results)
    }
}