function draw() {
  const canvas = document.querySelector(".canvas-below");

  if (!canvas || (canvas && !canvas.getContext)) return;

  const ctx = canvas.getContext("2d");

  drawLine(ctx, [0, 25], [650, 25], "gray", 1, false);
  drawLine(ctx, [0, 75], [650, 75], "red", 1, true);
  drawLine(ctx, [0, 125], [650, 125], "blue", 1, false);
}

function drawLine(
  ctx,
  begin,
  end,
  stroke = "black",
  width = 1,
  dashed = false
) {
  if (stroke) ctx.strokeStyle = stroke;
  if (width) ctx.lineWidth = width;

  ctx.beginPath();

  /*dashes are 5px and spaces are 3px*/
  if (dashed) {
    ctx.setLineDash([5, 3]);
  } else {
    ctx.setLineDash([]);
  }

  ctx.moveTo(...begin);
  ctx.lineTo(...end);
  ctx.stroke();
}
