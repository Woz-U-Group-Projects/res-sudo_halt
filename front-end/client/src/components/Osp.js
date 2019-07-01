import React, { Component } from "react";
import $ from "jquery";


class Osps extends Component {
    state = {
        osps: []
    }

    componentDidMount(){
        $(document).ready(function() {

            $.getJSON("http://localhost:8080/api/osp", function (data) {
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
            <div class="card-body" id="well-section">
                <table class="table" id="table">
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