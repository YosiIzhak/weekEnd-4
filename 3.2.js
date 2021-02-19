 function people(busStops){
    console.log(busStops.map(x => x[0] - x[1]).reduce( (x, y) => x + y));
  }
  people([[10,0],[3,5],[5,8]]);