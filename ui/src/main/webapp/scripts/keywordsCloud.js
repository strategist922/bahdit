/**
 * Copyright 2012 Booz Allen Hamilton. See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  Booz Allen Hamilton licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/*------------------- Animated Keywords Cloud Canvas ---------------------*/
if (!$("#tagCanvas").tagcanvas({
	textColour : null,
	textFont: null,
	textHeight: 50,
	weight : true,
	reverse : true,
	depth : 0.02,
	maxSpeed : 0.01
}, "tags")) {
	$("#tagCloud").hide();
}