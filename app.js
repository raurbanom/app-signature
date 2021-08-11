function drawGuideline(canvas) {
  if (!canvas || (canvas && !canvas.getContext)) return;

  const width = canvas.width;
  const height = canvas.height;
  const ctx = canvas.getContext("2d");

  ctx.lineWidth = 1;

  drawLine(ctx, 0, parseInt(height * 0.25), width, "gray", 1, false);
  height * 0.25;
  drawLine(ctx, 0, parseInt(height * 0.5), width, "red", 1, true);
  drawLine(ctx, 0, parseInt(height * 0.75), width, "blue", 1, false);
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

  // Dashes are 5px and spaces are 3px
  ctx.setLineDash(dashed ? [5, 3] : []);

  // For even stroke widths you can use integers for coordinates,
  // for odd stroke widths you want to use .5 to get crisp lines
  // that fill the pixels correctly.
  ctx.moveTo(x, y + 0.5);
  ctx.lineTo(x + length, y + 0.5);
  ctx.stroke();
  ctx.closePath();
}
