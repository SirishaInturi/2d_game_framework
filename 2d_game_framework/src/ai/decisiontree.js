export class DecisionTree {
  constructor(rootNode) {
    this.rootNode = rootNode;
  }

  makeDecision() {
    return this.rootNode.makeDecision();
  }
}

export class DecisionTreeNode {
  constructor(decisionFunction) {
    this.decisionFunction = decisionFunction;
    this.children = [];
  }

  makeDecision() {
    const decision = this.decisionFunction();
    return this.children[decision].makeDecision();
  }

  addChild(node) {
    this.children.push(node);
  }
}
