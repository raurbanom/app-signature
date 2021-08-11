function drawGuideline(canvas) {
  if (!canvas || (canvas && !canvas.getContext)) return;

  const ctx = canvas.getContext("2d");

  ctx.lineWidth = 1;

  drawLine(ctx, 0, 25, 650, "gray", 1, false);
  drawLine(ctx, 0, 75, 650, "red", 1, true);
  drawLine(ctx, 0, 125, 650, "blue", 1, false);
}

function drawLine(
  ctx,
  x,
  y,
  length,
  style = "black",
  width = 1,
  dashed = false
) {
  if (style) ctx.strokeStyle = style;
  if (width) ctx.lineWidth = width;

  ctx.beginPath();

  /*dashes are 5px and spaces are 3px*/
  if (dashed) {
    ctx.setLineDash([5, 3]);
  } else {
    ctx.setLineDash([]);
  }
  // For even stroke widths you can use integers for coordinates,
  // for odd stroke widths you want to use .5 to get crisp lines
  // that fill the pixels correctly.
  ctx.moveTo(x, y + 0.5);
  ctx.lineTo(x + length, y + 0.5);
  ctx.closePath();
  ctx.stroke();
}
