'use strict';

const newParagraph = document.createElement("p");
newParagraph.innerText = "Added with Javasript";
document.body.appendChild(newParagraph);

const newImage = document.createElement('img');
newImage.setAttribute('src','https://picsum.photos/200');
newImage.setAttribute('alt','Description of image');
document.body.appendChild(newImage);


const newDiv = document.createElement('div');
newDiv.innerHTML =     `
                        <ul>
                            <li>one</li>
                            <li>Two</li>
                            <li>Three</li>
                        </ul>
                        `
document.body.appendChild(newDiv);

const newSection = document.createElement("section");
newSection.innerHTML = `
                        <section>
                            <h2>CSE121b</h2>
                            <p>Welcome to Javascript Language</p>
                        </section>

                        `
document.body.appendChild(newSection);