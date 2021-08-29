export const indexTamlate = (content) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Reddit</title>
  <script src="/static"></script>
</head>
<body>
  <div id="react_root">${content}</div>
</body>
</html>
`;