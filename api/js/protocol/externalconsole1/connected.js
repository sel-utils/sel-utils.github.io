/*
 * This file was automatically generated by sel-utils and
 * released under the MIT License.
 * 
 * License: https://github.com/sel-project/sel-utils/blob/master/LICENSE
 * Repository: https://github.com/sel-project/sel-utils
 * Generated from https://github.com/sel-project/sel-utils/blob/master/xml/protocol/externalconsole1.xml
 */
/** @module sul/protocol/externalconsole1/connected */

//import Types from 'types';

/**
 * Packets regarding the server's console and commands.
 */
const Connected = {

	/**
	 * Logs a message from the server's console. It may be the output of a command, a debug
	 * message or any other message that the server retains able to be seen by the External
	 * Console.
	 */
	ConsoleMessage: class extends Buffer {

		static get ID(){ return 4; }

		static get CLIENTBOUND(){ return true; }
		static get SERVERBOUND(){ return false; }

		/**
		 * @param node
		 *        Name of the node that created the log or an empty string if the log was created by the hub or by a server
		 *        that isn't based on the hub-node layout.
		 * @param timestamp
		 *        Unix timestamp in milliseconds that indicates the exact time when the log was generated by the server.
		 *        
		 *        The logs may not arrive in order when the server uses the hub-node layout or some other kind of proxy
		 *        because the logs created by the nodes have an additional latency (the one between the hub, or proxy,
		 *        and the node).
		 * @param logger
		 *        Name of the logger. It may be the world name if the log was generated by a world's message (like a broadcast
		 *        or a chat message), the name of plugin (for example `plugin\test`) or the name of the package/module/class
		 *        that generated the log (like `math.vector` or `event.world.player`).
		 * @param message
		 *        The logged message. It may contain Minecraft's formatting codes which should be translated into
		 *        appropriate colours and formatting (bold, italic and strikethrough) by the client implementation
		 *        of the external console.
		 */
		constructor(node="", timestamp=0, logger="", message="") {
			super();
			this.node = node;
			this.timestamp = timestamp;
			this.logger = logger;
			this.message = message;
		}

		/** @return {Uint8Array} */
		encode() {
			this._buffer = [];
			this.writeBigEndianByte(4);
			var dhc5br=this.encodeString(this.node); this.writeBigEndianShort(dhc5br.length); this.writeBytes(dhc5br);
			this.writeBigEndianLong(this.timestamp);
			var dhc5bdzi=this.encodeString(this.logger); this.writeBigEndianShort(dhc5bdzi.length); this.writeBytes(dhc5bdzi);
			var dhc5znyd=this.encodeString(this.message); this.writeBigEndianShort(dhc5znyd.length); this.writeBytes(dhc5znyd);
			return new Uint8Array(this._buffer);
		}

		/** @param {(Uint8Array|Array)} buffer */
		decode(_buffer) {
			this._buffer = Array.from(_buffer);
			var _id=this.readBigEndianByte();
			this.node=this.decodeString(this.readBytes(this.readBigEndianShort()));
			this.timestamp=this.readBigEndianLong();
			this.logger=this.decodeString(this.readBytes(this.readBigEndianShort()));
			this.message=this.decodeString(this.readBytes(this.readBigEndianShort()));
			return this;
		}

		/** @param {(Uint8Array|Array)} buffer */
		static fromBuffer(buffer) {
			return new Connected.ConsoleMessage().decode(buffer);
		}

		/** @return {string} */
		toString() {
			return "ConsoleMessage(node: " + this.node + ", timestamp: " + this.timestamp + ", logger: " + this.logger + ", message: " + this.message + ")";
		}

	},

	/**
	 * Executes a command remotely if the server allows it. If not a Permission Denied
	 * is sent back. A good implementation of the external console client should never
	 * send this packet if remoteCommands field in Welcome.Accepted is not true.
	 */
	Command: class extends Buffer {

		static get ID(){ return 5; }

		static get CLIENTBOUND(){ return false; }
		static get SERVERBOUND(){ return true; }

		/**
		 * @param command
		 *        Command to execute on the server.
		 */
		constructor(command="") {
			super();
			this.command = command;
		}

		/** @return {Uint8Array} */
		encode() {
			this._buffer = [];
			this.writeBigEndianByte(5);
			var dhc5b1y5=this.encodeString(this.command); this.writeBigEndianShort(dhc5b1y5.length); this.writeBytes(dhc5b1y5);
			return new Uint8Array(this._buffer);
		}

		/** @param {(Uint8Array|Array)} buffer */
		decode(_buffer) {
			this._buffer = Array.from(_buffer);
			var _id=this.readBigEndianByte();
			this.command=this.decodeString(this.readBytes(this.readBigEndianShort()));
			return this;
		}

		/** @param {(Uint8Array|Array)} buffer */
		static fromBuffer(buffer) {
			return new Connected.Command().decode(buffer);
		}

		/** @return {string} */
		toString() {
			return "Command(command: " + this.command + ")";
		}

	},

	/**
	 * Bodyless packet only sent in response to Command when the server doesn't allow the
	 * execution of remote commands through the external console. A good implementation
	 * of the external console client should never receive this packet avoiding the use
	 * of the Command packet when the remoteCommands field is false.
	 */
	PermissionDenied: class extends Buffer {

		static get ID(){ return 6; }

		static get CLIENTBOUND(){ return true; }
		static get SERVERBOUND(){ return false; }

		constructor() {
			super();
		}

		/** @return {Uint8Array} */
		encode() {
			this._buffer = [];
			this.writeBigEndianByte(6);
			return new Uint8Array(this._buffer);
		}

		/** @param {(Uint8Array|Array)} buffer */
		decode(_buffer) {
			this._buffer = Array.from(_buffer);
			var _id=this.readBigEndianByte();
			return this;
		}

		/** @param {(Uint8Array|Array)} buffer */
		static fromBuffer(buffer) {
			return new Connected.PermissionDenied().decode(buffer);
		}

		/** @return {string} */
		toString() {
			return "PermissionDenied()";
		}

	},

}

//export { Connected };