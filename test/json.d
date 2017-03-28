import std.algorithm : endsWith;
import std.file : read, isFile, dirEntries, SpanMode;
import std.json : parseJSON;

void main(string[] args) {

	foreach(string file ; dirEntries("../json", SpanMode.breadth)) {
		if(file.endsWith(".json")) parseJSON(cast(string)read(file));
	}

}
