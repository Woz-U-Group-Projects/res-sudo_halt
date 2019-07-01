import React, { Component } from "react";
import $ from "jquery";
import HostUrl from "./HostUrl";


class Osps extends Component {
    state = {
        osps: []
    }

    componentDidMount(){
        $(document).ready(function() {
            $.getJSON(HostUrl + "/api/osp", function (data) {
                console.log(data);
                for (var i = 0; i < data.length; i++) {
                    $("#table").append("<tr>"
                        + "<td>" + data[i].ospName + "</td>"
                        + "<td>" + data[i].owner + "</td>"
                        + "<td>" + data[i].projectLink + "</td>"
                        + "<td>" + data[i].rating + "</td>"
                        + "<td>" + data[i].vacancy + "</td>"
                        + "<td>" + data[i].license + "</td>"
                        + "<td>" + data[i].ospTags + "</td>"
                        + "</tr>"
                    );
                }
            });
        
        });
    }

    render() {
        return (
            <div className="card-body" id="well-section">
                <table className="table" id="table">
                    <thead>
                        <tr>
                            <th scope="col">OSP Name </th>
                            <th scope="col">Owner </th>
                            <th scope="col">Project Link</th>
                            <th scope="col">Rating</th>
                            <th scope="col">Vacancy</th>
                            <th scope="col">License</th>
                            <th scope="col">Tags</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* content added here */}
                    </tbody>
                </table>
            </div>
        );
    }
}



export default Osps;