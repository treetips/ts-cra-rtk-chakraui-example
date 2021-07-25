module.exports = () => {
  const formatDate = (date) => {
    var yyyy = date.getFullYear();
    var MM = ("00" + (date.getMonth() + 1)).slice(-2);
    var dd = ("00" + date.getDate()).slice(-2);
    return `${yyyy}-${MM}-${dd}`;
  };

  const getRandomDate = () => {
    var d1 = new Date(formatDate(new Date()));
    var d2 = new Date(d1.setDate(d1.getDate() + 30));
    var c = (d2 - d1) / 86400000;
    var x = Math.floor(Math.random() * (c + 1));
    d1.setDate(d1.getDate() + x);
    return formatDate(d1);
  };

  const DATA_NUMBER = 16;
  const data = [];
  for (let i = 0; i < DATA_NUMBER; i++) {
    const no = i + 1;
    const now = new Date();
    now.setHours(now.getHours() - 1);
    data.push({
      id: no,
      title: `title ${no}`,
      description: `description\n${no}`,
      status: no % 2 === 0 ? true : false,
      createdAt: now,
      updatedAt: new Date(now.setSeconds(now.getSeconds() + no)),
    });
  }

  return {
    tasks: data,
  };
};
