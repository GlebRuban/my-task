import { Component } from 'react';

interface Param {
    id: number;
    name: string;
    type: 'string';
}

interface ParamValue {
    paramId: number;
    value: string;
}

interface Model {
    paramValues: ParamValue[];
}

interface Props {
    params: Param[];
    model: Model;
}

interface State {
    paramValues: ParamValue[];
}

class ParamsEditor extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            paramValues: props.model.paramValues,
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(paramId: number, value: string) {
        const updatedParamValues = this.state.paramValues.map((paramValue) => {
            if (paramValue.paramId === paramId) {
                return { paramId, value };
            }
            return paramValue;
        });
        this.setState({ paramValues: updatedParamValues });
    }

    getModel(): Model {
        return { paramValues: this.state.paramValues };
    }

    render() {
        const { params } = this.props;
        return (
            <div>
                {params.map((param) => (
                    <div key={param.id}>
                        <label>{param.name}:</label>
                        <input
                            type="text"
                            value={this.state.paramValues.find((pv) => pv.paramId === param.id)?.value || ''}
                            onChange={(e) => this.handleChange(param.id, e.target.value)}
                        />
                    </div>
                ))}
            </div>
        );
    }
}

export default ParamsEditor;