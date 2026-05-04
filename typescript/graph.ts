let default_colors : Color[] = [];
let last_color : number = 0;
function get_default_color() : Color {
	last_color = (last_color + 1) % default_colors.length;
	return default_colors[last_color];
}

abstract class Graph {
	color : Color = '#000';
	type : GraphType = 'raw';
	abstract serializable() : SerializableGraph;
}

class RawGraph extends Graph {
	data : Coordinate[] = [];
	constructor() {
		super();
		this.color = get_default_color();
		this.type = 'raw';
	}
	serializable(): SerializableGraph {
		return {
			color: this.color,
			type: this.type,
			data: this.data
		};
	}
}

class ExpressionGraph extends Graph {
	expression : string = '';
	constructor() {
		super();
		this.color = get_default_color();
		this.type = 'expression';
	}
	serializable(): SerializableGraph {
		return {
			color: this.color,
			type: this.type,
			expression: this.expression
		};
	}
}

class EvaluatorGraph extends Graph {
	evaluator : Function = () => {};
	constructor() {
		super();
		this.color = get_default_color();
		this.type = 'evaluator';
	}
	serializable(): SerializableGraph {
		return {
			color: this.color,
			type: this.type,
			evaluator: this.evaluator.toString()
		};
	}
}