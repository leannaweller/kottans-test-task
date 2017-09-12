import {h,Component} from "preact";
import {getRandomColor} from '../../utils';
import PieChart from "react-svg-piechart"

export default class CustomPieChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expandedSector: null,
        }
        this.handleMouseEnterOnSector = this.handleMouseEnterOnSector.bind(this)
    }

    handleMouseEnterOnSector(sector) {
        this.setState({expandedSector: sector})
    }

    render({data}) {
        const {expandedSector} = this.state
        return (
            <div class="piechart">
                <PieChart
                    data={data}
                    expandedSector={expandedSector}
                    onSectorHover={this.handleMouseEnterOnSector}
                    sectorStrokeWidth={2}
                    expandOnHover
                    shrinkOnTouchEnd
                />
                <div>
                {
                    data && data.map((element, i) => (
                        <div key={i}>
                            <span style={{background: getRandomColor()}}></span>
                            <span style={{fontWeight: this.state.expandedSector === i ? "bold" : null}}>
                                {element.key} : {element.value}
                            </span>
                        </div>
                    ))
                }
                </div>
            </div>
        )
    }
}
