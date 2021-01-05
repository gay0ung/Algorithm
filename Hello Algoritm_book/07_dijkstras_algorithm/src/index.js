// 그래프
let graph = {};

graph["you"] = ["alice", "bob", "claire"];

graph["start"] = {};
graph["start"]["a"] = 6;
graph["start"]["b"] = 2;

console.log(Object.keys(graph["start"])); // ["a","b"]

graph["a"] = {};
graph["a"]["fin"] = 1;

graph["b"] = {};
graph["b"]["a"] = 3;
graph["b"]["fin"] = 5;

graph["fin"] = {};

// 비용
let infinity = 0;

let costs = {};
costs["a"] = 6;
costs["b"] = 2;
costs["fin"] = infinity;

// 부모
let parents = {};
parents["a"] = "start";
parents["b"] = "start";
parents["fin"] = null;

let processed = []; // 이미 처리한 정점을 추가하기 위한 배열

function find_lowest_cost_node(costs) {
  let lowest_cost = 0;
  let lowest_cost_node = null;

  // 모든 정점 확인
  for (let node in costs) {
    let cost = costs[node]; // 아직 처리하지 않은 정점 중 더 싼 것이 있으면

    if (cost < lowest_cost && processed.indexOf(node) === -1) {
      lowest_cost = cost; // 새로운 최저 정점으로 설정
      lowest_cost_node = node;
    }
  }

  return lowest_cost_node;
}

let node = find_lowest_cost_node(costs); // 아직 처리 하지 않은 가장 값이 작은 정점을 찾는다.

while (node !== null) {
  // 모든 정점을 처리하면 반복문 종료
  let cost = costs[node];
  let neighbors = graph[node];

  // 모든 이웃에 대해 반복
  for (let n in Object.keys(neighbors)) {
    let new_cost = cost + neighbors[n];

    // 이 정점을 지나는 것이 더 싸다면
    if (costs[n] > new_cost) {
      costs[n] = new_cost; // 정점의 가격을 갱신하고
      parents[n] = node; // 부모를 이 정점으로 새로 설정
    }
  }

  processed.push(node); // 정점을 처리한 사실을 기록
  node = find_lowest_cost_node(costs); // 다음으로 처리할 정점을 찾아서 반복
}

console.log(`Cost from the start to each node: ${JSON.stringify(costs)}`);
