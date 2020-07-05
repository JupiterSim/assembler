// Generated from src/syntax/RISCV.g4 by ANTLR 4.7.3-SNAPSHOT
// @ts-nocheck

import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { RISCVListener } from "./RISCVListener";

export class RISCVParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly I_LUI = 9;
	public static readonly I_AUIPC = 10;
	public static readonly I_JAL = 11;
	public static readonly I_JALR = 12;
	public static readonly I_BEQ = 13;
	public static readonly I_BNE = 14;
	public static readonly I_BLT = 15;
	public static readonly I_BGE = 16;
	public static readonly I_BLTU = 17;
	public static readonly I_BGEU = 18;
	public static readonly I_LB = 19;
	public static readonly I_LH = 20;
	public static readonly I_LW = 21;
	public static readonly I_LBU = 22;
	public static readonly I_LHU = 23;
	public static readonly I_SB = 24;
	public static readonly I_SH = 25;
	public static readonly I_SW = 26;
	public static readonly I_ADDI = 27;
	public static readonly I_SLTI = 28;
	public static readonly I_SLTIU = 29;
	public static readonly I_XORI = 30;
	public static readonly I_ORI = 31;
	public static readonly I_ANDI = 32;
	public static readonly I_SLLI = 33;
	public static readonly I_SRLI = 34;
	public static readonly I_SRAI = 35;
	public static readonly I_ADD = 36;
	public static readonly I_SUB = 37;
	public static readonly I_SLL = 38;
	public static readonly I_SLT = 39;
	public static readonly I_SLTU = 40;
	public static readonly I_XOR = 41;
	public static readonly I_SRL = 42;
	public static readonly I_SRA = 43;
	public static readonly I_OR = 44;
	public static readonly I_AND = 45;
	public static readonly I_FENCE = 46;
	public static readonly I_ECALL = 47;
	public static readonly I_EBREAK = 48;
	public static readonly I_FENCEI = 49;
	public static readonly I_CSRRW = 50;
	public static readonly I_CSRRS = 51;
	public static readonly I_CSRRC = 52;
	public static readonly I_CSRRWI = 53;
	public static readonly I_CSRRSI = 54;
	public static readonly I_CSRRCI = 55;
	public static readonly I_MUL = 56;
	public static readonly I_MULH = 57;
	public static readonly I_MULHSU = 58;
	public static readonly I_MULHU = 59;
	public static readonly I_DIV = 60;
	public static readonly I_DIVU = 61;
	public static readonly I_REM = 62;
	public static readonly I_REMU = 63;
	public static readonly I_LRW = 64;
	public static readonly I_SCW = 65;
	public static readonly I_AMOSWAPW = 66;
	public static readonly I_AMOADDW = 67;
	public static readonly I_AMOXORW = 68;
	public static readonly I_AMOANDW = 69;
	public static readonly I_AMOORW = 70;
	public static readonly I_AMOMINW = 71;
	public static readonly I_AMOMAXW = 72;
	public static readonly I_AMOMINUW = 73;
	public static readonly I_AMOMAXUW = 74;
	public static readonly I_FLW = 75;
	public static readonly I_FSW = 76;
	public static readonly I_FMADDS = 77;
	public static readonly I_FMSUBS = 78;
	public static readonly I_FNMSUBS = 79;
	public static readonly I_FNMADDS = 80;
	public static readonly I_FADDS = 81;
	public static readonly I_FSUBS = 82;
	public static readonly I_FMULS = 83;
	public static readonly I_FDIVS = 84;
	public static readonly I_FSQRTS = 85;
	public static readonly I_FSGNJS = 86;
	public static readonly I_FSGNJNS = 87;
	public static readonly I_FSGNJXS = 88;
	public static readonly I_FMINS = 89;
	public static readonly I_FMAXS = 90;
	public static readonly I_FCVTWS = 91;
	public static readonly I_FCVTWUS = 92;
	public static readonly I_FMVXW = 93;
	public static readonly I_FMVXS = 94;
	public static readonly I_FEQS = 95;
	public static readonly I_FLTS = 96;
	public static readonly I_FLES = 97;
	public static readonly I_FCLASSS = 98;
	public static readonly I_FCVTSW = 99;
	public static readonly I_FCVTSWU = 100;
	public static readonly I_FMVWX = 101;
	public static readonly I_FMVSX = 102;
	public static readonly I_FLD = 103;
	public static readonly I_FSD = 104;
	public static readonly I_FMADDD = 105;
	public static readonly I_FMSUBD = 106;
	public static readonly I_FNMSUBD = 107;
	public static readonly I_FNMADDD = 108;
	public static readonly I_FADDD = 109;
	public static readonly I_FSUBD = 110;
	public static readonly I_FMULD = 111;
	public static readonly I_FDIVD = 112;
	public static readonly I_FSQRTD = 113;
	public static readonly I_FSGNJD = 114;
	public static readonly I_FSGNJND = 115;
	public static readonly I_FSGNJXD = 116;
	public static readonly I_FMIND = 117;
	public static readonly I_FMAXD = 118;
	public static readonly I_FCVTSD = 119;
	public static readonly I_FCVTDS = 120;
	public static readonly I_FEQD = 121;
	public static readonly I_FLTD = 122;
	public static readonly I_FLED = 123;
	public static readonly I_FCLASSD = 124;
	public static readonly I_FCVTWD = 125;
	public static readonly I_FCVTWUD = 126;
	public static readonly I_FCVTDW = 127;
	public static readonly I_FCVTDWU = 128;
	public static readonly I_LA = 129;
	public static readonly I_LLA = 130;
	public static readonly I_NOP = 131;
	public static readonly I_LI = 132;
	public static readonly I_MV = 133;
	public static readonly I_NOT = 134;
	public static readonly I_NEG = 135;
	public static readonly I_SEQZ = 136;
	public static readonly I_SNEZ = 137;
	public static readonly I_SLTZ = 138;
	public static readonly I_SGTZ = 139;
	public static readonly I_BEQZ = 140;
	public static readonly I_BNEZ = 141;
	public static readonly I_BLEZ = 142;
	public static readonly I_BGEZ = 143;
	public static readonly I_BLTZ = 144;
	public static readonly I_BGTZ = 145;
	public static readonly I_BGT = 146;
	public static readonly I_BLE = 147;
	public static readonly I_BGTU = 148;
	public static readonly I_BLEU = 149;
	public static readonly I_J = 150;
	public static readonly I_JR = 151;
	public static readonly I_RET = 152;
	public static readonly I_CALL = 153;
	public static readonly I_TAIL = 154;
	public static readonly I_RDINSTRET = 155;
	public static readonly I_RDCYCLE = 156;
	public static readonly I_RDTIME = 157;
	public static readonly I_CSRR = 158;
	public static readonly I_CSRW = 159;
	public static readonly I_CSRS = 160;
	public static readonly I_CSRC = 161;
	public static readonly I_CSRWI = 162;
	public static readonly I_CSRSI = 163;
	public static readonly I_CSRCI = 164;
	public static readonly I_FRCSR = 165;
	public static readonly I_FSCSR = 166;
	public static readonly I_FRRM = 167;
	public static readonly I_FSRM = 168;
	public static readonly I_FRFLAGS = 169;
	public static readonly I_FSFLAGS = 170;
	public static readonly I_FMVS = 171;
	public static readonly I_FABSS = 172;
	public static readonly I_FNEGS = 173;
	public static readonly I_FMVD = 174;
	public static readonly I_FABSD = 175;
	public static readonly I_FNEGD = 176;
	public static readonly D_BSS = 177;
	public static readonly D_DATA = 178;
	public static readonly D_RODATA = 179;
	public static readonly D_TEXT = 180;
	public static readonly D_GLOBL = 181;
	public static readonly D_ALIGN = 182;
	public static readonly D_BALIGN = 183;
	public static readonly D_FILE = 184;
	public static readonly D_EQU = 185;
	public static readonly D_BYTE = 186;
	public static readonly D_HALF = 187;
	public static readonly D_WORD = 188;
	public static readonly D_FLOAT = 189;
	public static readonly D_ASCII = 190;
	public static readonly D_STRING = 191;
	public static readonly D_ZERO = 192;
	public static readonly XREG = 193;
	public static readonly FREG = 194;
	public static readonly FLOAT = 195;
	public static readonly INT = 196;
	public static readonly SIGN = 197;
	public static readonly STRING = 198;
	public static readonly ID = 199;
	public static readonly LABEL = 200;
	public static readonly EOL = 201;
	public static readonly COMMENT = 202;
	public static readonly WHITESPACE = 203;
	public static readonly RULE_prog = 0;
	public static readonly RULE_line = 1;
	public static readonly RULE_stmt = 2;
	public static readonly RULE_label_def = 3;
	public static readonly RULE_instruction = 4;
	public static readonly RULE_rv32i_ext = 5;
	public static readonly RULE_rv32zifencei_ext = 6;
	public static readonly RULE_rv32zicsr_ext = 7;
	public static readonly RULE_rv32m_ext = 8;
	public static readonly RULE_rv32a_ext = 9;
	public static readonly RULE_rv32f_ext = 10;
	public static readonly RULE_rv32d_ext = 11;
	public static readonly RULE_rv32i_ext_pseudos = 12;
	public static readonly RULE_rv32zicsr_ext_pseudos = 13;
	public static readonly RULE_rv32f_ext_pseudos = 14;
	public static readonly RULE_rv32d_ext_pseudos = 15;
	public static readonly RULE_static_data = 16;
	public static readonly RULE_directive = 17;
	public static readonly RULE_expr = 18;
	public static readonly RULE_fexpr = 19;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"prog", "line", "stmt", "label_def", "instruction", "rv32i_ext", "rv32zifencei_ext",
		"rv32zicsr_ext", "rv32m_ext", "rv32a_ext", "rv32f_ext", "rv32d_ext", "rv32i_ext_pseudos",
		"rv32zicsr_ext_pseudos", "rv32f_ext_pseudos", "rv32d_ext_pseudos", "static_data",
		"directive", "expr", "fexpr",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "','", "'('", "')'", "'.section'", "'%hi'", "'%lo'", "'%pcrel_hi'",
		"'%pcrel_lo'", undefined, undefined, undefined, undefined, undefined,
		undefined, undefined, undefined, undefined, undefined, undefined, undefined,
		undefined, undefined, undefined, undefined, undefined, undefined, undefined,
		undefined, undefined, undefined, undefined, undefined, undefined, undefined,
		undefined, undefined, undefined, undefined, undefined, undefined, undefined,
		undefined, undefined, undefined, undefined, undefined, undefined, undefined,
		undefined, undefined, undefined, undefined, undefined, undefined, undefined,
		undefined, undefined, undefined, undefined, undefined, undefined, undefined,
		undefined, undefined, undefined, undefined, undefined, undefined, undefined,
		undefined, undefined, undefined, undefined, undefined, undefined, undefined,
		undefined, undefined, undefined, undefined, undefined, undefined, undefined,
		undefined, undefined, undefined, undefined, undefined, undefined, undefined,
		undefined, undefined, undefined, undefined, undefined, undefined, undefined,
		undefined, undefined, undefined, undefined, undefined, undefined, undefined,
		undefined, undefined, undefined, undefined, undefined, undefined, undefined,
		undefined, undefined, undefined, undefined, undefined, undefined, undefined,
		undefined, undefined, undefined, undefined, undefined, undefined, undefined,
		undefined, undefined, undefined, undefined, undefined, undefined, undefined,
		undefined, undefined, undefined, undefined, undefined, undefined, undefined,
		undefined, undefined, undefined, undefined, undefined, undefined, undefined,
		undefined, undefined, undefined, undefined, undefined, undefined, undefined,
		undefined, undefined, undefined, undefined, undefined, undefined, undefined,
		undefined, undefined, undefined, undefined, undefined, undefined, undefined,
		undefined, undefined, undefined, undefined, undefined, undefined, undefined,
		undefined, undefined, "'.bss'", "'.data'", "'.rodata'", "'.text'", undefined,
		undefined, "'.balign'", "'.file'", undefined, "'.byte'", undefined, undefined,
		"'.float'", "'.ascii'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined,
		undefined, undefined, "I_LUI", "I_AUIPC", "I_JAL", "I_JALR", "I_BEQ",
		"I_BNE", "I_BLT", "I_BGE", "I_BLTU", "I_BGEU", "I_LB", "I_LH", "I_LW",
		"I_LBU", "I_LHU", "I_SB", "I_SH", "I_SW", "I_ADDI", "I_SLTI", "I_SLTIU",
		"I_XORI", "I_ORI", "I_ANDI", "I_SLLI", "I_SRLI", "I_SRAI", "I_ADD", "I_SUB",
		"I_SLL", "I_SLT", "I_SLTU", "I_XOR", "I_SRL", "I_SRA", "I_OR", "I_AND",
		"I_FENCE", "I_ECALL", "I_EBREAK", "I_FENCEI", "I_CSRRW", "I_CSRRS", "I_CSRRC",
		"I_CSRRWI", "I_CSRRSI", "I_CSRRCI", "I_MUL", "I_MULH", "I_MULHSU", "I_MULHU",
		"I_DIV", "I_DIVU", "I_REM", "I_REMU", "I_LRW", "I_SCW", "I_AMOSWAPW",
		"I_AMOADDW", "I_AMOXORW", "I_AMOANDW", "I_AMOORW", "I_AMOMINW", "I_AMOMAXW",
		"I_AMOMINUW", "I_AMOMAXUW", "I_FLW", "I_FSW", "I_FMADDS", "I_FMSUBS",
		"I_FNMSUBS", "I_FNMADDS", "I_FADDS", "I_FSUBS", "I_FMULS", "I_FDIVS",
		"I_FSQRTS", "I_FSGNJS", "I_FSGNJNS", "I_FSGNJXS", "I_FMINS", "I_FMAXS",
		"I_FCVTWS", "I_FCVTWUS", "I_FMVXW", "I_FMVXS", "I_FEQS", "I_FLTS", "I_FLES",
		"I_FCLASSS", "I_FCVTSW", "I_FCVTSWU", "I_FMVWX", "I_FMVSX", "I_FLD", "I_FSD",
		"I_FMADDD", "I_FMSUBD", "I_FNMSUBD", "I_FNMADDD", "I_FADDD", "I_FSUBD",
		"I_FMULD", "I_FDIVD", "I_FSQRTD", "I_FSGNJD", "I_FSGNJND", "I_FSGNJXD",
		"I_FMIND", "I_FMAXD", "I_FCVTSD", "I_FCVTDS", "I_FEQD", "I_FLTD", "I_FLED",
		"I_FCLASSD", "I_FCVTWD", "I_FCVTWUD", "I_FCVTDW", "I_FCVTDWU", "I_LA",
		"I_LLA", "I_NOP", "I_LI", "I_MV", "I_NOT", "I_NEG", "I_SEQZ", "I_SNEZ",
		"I_SLTZ", "I_SGTZ", "I_BEQZ", "I_BNEZ", "I_BLEZ", "I_BGEZ", "I_BLTZ",
		"I_BGTZ", "I_BGT", "I_BLE", "I_BGTU", "I_BLEU", "I_J", "I_JR", "I_RET",
		"I_CALL", "I_TAIL", "I_RDINSTRET", "I_RDCYCLE", "I_RDTIME", "I_CSRR",
		"I_CSRW", "I_CSRS", "I_CSRC", "I_CSRWI", "I_CSRSI", "I_CSRCI", "I_FRCSR",
		"I_FSCSR", "I_FRRM", "I_FSRM", "I_FRFLAGS", "I_FSFLAGS", "I_FMVS", "I_FABSS",
		"I_FNEGS", "I_FMVD", "I_FABSD", "I_FNEGD", "D_BSS", "D_DATA", "D_RODATA",
		"D_TEXT", "D_GLOBL", "D_ALIGN", "D_BALIGN", "D_FILE", "D_EQU", "D_BYTE",
		"D_HALF", "D_WORD", "D_FLOAT", "D_ASCII", "D_STRING", "D_ZERO", "XREG",
		"FREG", "FLOAT", "INT", "SIGN", "STRING", "ID", "LABEL", "EOL", "COMMENT",
		"WHITESPACE",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(RISCVParser._LITERAL_NAMES, RISCVParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return RISCVParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "RISCV.g4"; }

	// @Override
	public get ruleNames(): string[] { return RISCVParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return RISCVParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(RISCVParser._ATN, this);
	}
	// @RuleVersion(0)
	public prog(): ProgContext {
		let _localctx: ProgContext = new ProgContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, RISCVParser.RULE_prog);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 43;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 0, this._ctx);
			while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1 + 1) {
					{
					{
					this.state = 40;
					this.line();
					}
					}
				}
				this.state = 45;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 0, this._ctx);
			}
			this.state = 46;
			this.match(RISCVParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public line(): LineContext {
		let _localctx: LineContext = new LineContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, RISCVParser.RULE_line);
		try {
			this.state = 52;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case RISCVParser.T__3:
			case RISCVParser.I_LUI:
			case RISCVParser.I_AUIPC:
			case RISCVParser.I_JAL:
			case RISCVParser.I_JALR:
			case RISCVParser.I_BEQ:
			case RISCVParser.I_BNE:
			case RISCVParser.I_BLT:
			case RISCVParser.I_BGE:
			case RISCVParser.I_BLTU:
			case RISCVParser.I_BGEU:
			case RISCVParser.I_LB:
			case RISCVParser.I_LH:
			case RISCVParser.I_LW:
			case RISCVParser.I_LBU:
			case RISCVParser.I_LHU:
			case RISCVParser.I_SB:
			case RISCVParser.I_SH:
			case RISCVParser.I_SW:
			case RISCVParser.I_ADDI:
			case RISCVParser.I_SLTI:
			case RISCVParser.I_SLTIU:
			case RISCVParser.I_XORI:
			case RISCVParser.I_ORI:
			case RISCVParser.I_ANDI:
			case RISCVParser.I_SLLI:
			case RISCVParser.I_SRLI:
			case RISCVParser.I_SRAI:
			case RISCVParser.I_ADD:
			case RISCVParser.I_SUB:
			case RISCVParser.I_SLL:
			case RISCVParser.I_SLT:
			case RISCVParser.I_SLTU:
			case RISCVParser.I_XOR:
			case RISCVParser.I_SRL:
			case RISCVParser.I_SRA:
			case RISCVParser.I_OR:
			case RISCVParser.I_AND:
			case RISCVParser.I_FENCE:
			case RISCVParser.I_ECALL:
			case RISCVParser.I_EBREAK:
			case RISCVParser.I_FENCEI:
			case RISCVParser.I_CSRRW:
			case RISCVParser.I_CSRRS:
			case RISCVParser.I_CSRRC:
			case RISCVParser.I_CSRRWI:
			case RISCVParser.I_CSRRSI:
			case RISCVParser.I_CSRRCI:
			case RISCVParser.I_MUL:
			case RISCVParser.I_MULH:
			case RISCVParser.I_MULHSU:
			case RISCVParser.I_MULHU:
			case RISCVParser.I_DIV:
			case RISCVParser.I_DIVU:
			case RISCVParser.I_REM:
			case RISCVParser.I_REMU:
			case RISCVParser.I_LRW:
			case RISCVParser.I_SCW:
			case RISCVParser.I_AMOSWAPW:
			case RISCVParser.I_AMOADDW:
			case RISCVParser.I_AMOXORW:
			case RISCVParser.I_AMOANDW:
			case RISCVParser.I_AMOORW:
			case RISCVParser.I_AMOMINW:
			case RISCVParser.I_AMOMAXW:
			case RISCVParser.I_AMOMINUW:
			case RISCVParser.I_AMOMAXUW:
			case RISCVParser.I_FLW:
			case RISCVParser.I_FSW:
			case RISCVParser.I_FMADDS:
			case RISCVParser.I_FMSUBS:
			case RISCVParser.I_FNMSUBS:
			case RISCVParser.I_FNMADDS:
			case RISCVParser.I_FADDS:
			case RISCVParser.I_FSUBS:
			case RISCVParser.I_FMULS:
			case RISCVParser.I_FDIVS:
			case RISCVParser.I_FSQRTS:
			case RISCVParser.I_FSGNJS:
			case RISCVParser.I_FSGNJNS:
			case RISCVParser.I_FSGNJXS:
			case RISCVParser.I_FMINS:
			case RISCVParser.I_FMAXS:
			case RISCVParser.I_FCVTWS:
			case RISCVParser.I_FCVTWUS:
			case RISCVParser.I_FMVXW:
			case RISCVParser.I_FMVXS:
			case RISCVParser.I_FEQS:
			case RISCVParser.I_FLTS:
			case RISCVParser.I_FLES:
			case RISCVParser.I_FCLASSS:
			case RISCVParser.I_FCVTSW:
			case RISCVParser.I_FCVTSWU:
			case RISCVParser.I_FMVWX:
			case RISCVParser.I_FMVSX:
			case RISCVParser.I_FLD:
			case RISCVParser.I_FSD:
			case RISCVParser.I_FMADDD:
			case RISCVParser.I_FMSUBD:
			case RISCVParser.I_FNMSUBD:
			case RISCVParser.I_FNMADDD:
			case RISCVParser.I_FADDD:
			case RISCVParser.I_FSUBD:
			case RISCVParser.I_FMULD:
			case RISCVParser.I_FDIVD:
			case RISCVParser.I_FSQRTD:
			case RISCVParser.I_FSGNJD:
			case RISCVParser.I_FSGNJND:
			case RISCVParser.I_FSGNJXD:
			case RISCVParser.I_FMIND:
			case RISCVParser.I_FMAXD:
			case RISCVParser.I_FCVTSD:
			case RISCVParser.I_FCVTDS:
			case RISCVParser.I_FEQD:
			case RISCVParser.I_FLTD:
			case RISCVParser.I_FLED:
			case RISCVParser.I_FCLASSD:
			case RISCVParser.I_FCVTWD:
			case RISCVParser.I_FCVTWUD:
			case RISCVParser.I_FCVTDW:
			case RISCVParser.I_FCVTDWU:
			case RISCVParser.I_LA:
			case RISCVParser.I_LLA:
			case RISCVParser.I_NOP:
			case RISCVParser.I_LI:
			case RISCVParser.I_MV:
			case RISCVParser.I_NOT:
			case RISCVParser.I_NEG:
			case RISCVParser.I_SEQZ:
			case RISCVParser.I_SNEZ:
			case RISCVParser.I_SLTZ:
			case RISCVParser.I_SGTZ:
			case RISCVParser.I_BEQZ:
			case RISCVParser.I_BNEZ:
			case RISCVParser.I_BLEZ:
			case RISCVParser.I_BGEZ:
			case RISCVParser.I_BLTZ:
			case RISCVParser.I_BGTZ:
			case RISCVParser.I_BGT:
			case RISCVParser.I_BLE:
			case RISCVParser.I_BGTU:
			case RISCVParser.I_BLEU:
			case RISCVParser.I_J:
			case RISCVParser.I_JR:
			case RISCVParser.I_RET:
			case RISCVParser.I_CALL:
			case RISCVParser.I_TAIL:
			case RISCVParser.I_RDINSTRET:
			case RISCVParser.I_RDCYCLE:
			case RISCVParser.I_RDTIME:
			case RISCVParser.I_CSRR:
			case RISCVParser.I_CSRW:
			case RISCVParser.I_CSRS:
			case RISCVParser.I_CSRC:
			case RISCVParser.I_CSRWI:
			case RISCVParser.I_CSRSI:
			case RISCVParser.I_CSRCI:
			case RISCVParser.I_FRCSR:
			case RISCVParser.I_FSCSR:
			case RISCVParser.I_FRRM:
			case RISCVParser.I_FSRM:
			case RISCVParser.I_FRFLAGS:
			case RISCVParser.I_FSFLAGS:
			case RISCVParser.I_FMVS:
			case RISCVParser.I_FABSS:
			case RISCVParser.I_FNEGS:
			case RISCVParser.I_FMVD:
			case RISCVParser.I_FABSD:
			case RISCVParser.I_FNEGD:
			case RISCVParser.D_BSS:
			case RISCVParser.D_DATA:
			case RISCVParser.D_RODATA:
			case RISCVParser.D_TEXT:
			case RISCVParser.D_GLOBL:
			case RISCVParser.D_ALIGN:
			case RISCVParser.D_BALIGN:
			case RISCVParser.D_FILE:
			case RISCVParser.D_EQU:
			case RISCVParser.D_BYTE:
			case RISCVParser.D_HALF:
			case RISCVParser.D_WORD:
			case RISCVParser.D_FLOAT:
			case RISCVParser.D_ASCII:
			case RISCVParser.D_STRING:
			case RISCVParser.D_ZERO:
			case RISCVParser.LABEL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 48;
				this.stmt();
				this.state = 49;
				this.match(RISCVParser.EOL);
				}
				break;
			case RISCVParser.EOL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 51;
				this.match(RISCVParser.EOL);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public stmt(): StmtContext {
		let _localctx: StmtContext = new StmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, RISCVParser.RULE_stmt);
		try {
			this.state = 64;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 2, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 54;
				this.label_def();
				this.state = 55;
				this.static_data();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 57;
				this.label_def();
				this.state = 58;
				this.instruction();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 60;
				this.label_def();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 61;
				this.directive();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 62;
				this.static_data();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 63;
				this.instruction();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public label_def(): Label_defContext {
		let _localctx: Label_defContext = new Label_defContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, RISCVParser.RULE_label_def);
		try {
			_localctx = new LABELContext(_localctx);
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 66;
			this.match(RISCVParser.LABEL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public instruction(): InstructionContext {
		let _localctx: InstructionContext = new InstructionContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, RISCVParser.RULE_instruction);
		try {
			this.state = 79;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 3, this._ctx) ) {
			case 1:
				_localctx = new RV32IContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 68;
				this.rv32i_ext();
				}
				break;

			case 2:
				_localctx = new RV32ZifenceiContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 69;
				this.rv32zifencei_ext();
				}
				break;

			case 3:
				_localctx = new RV32ZicsrContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 70;
				this.rv32zicsr_ext();
				}
				break;

			case 4:
				_localctx = new RV32MContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 71;
				this.rv32m_ext();
				}
				break;

			case 5:
				_localctx = new RV32AContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 72;
				this.rv32a_ext();
				}
				break;

			case 6:
				_localctx = new RV32FContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 73;
				this.rv32f_ext();
				}
				break;

			case 7:
				_localctx = new RV32DContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 74;
				this.rv32d_ext();
				}
				break;

			case 8:
				_localctx = new RV32IPSEUDOSContext(_localctx);
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 75;
				this.rv32i_ext_pseudos();
				}
				break;

			case 9:
				_localctx = new RV32ZicsrPSEUDOSContext(_localctx);
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 76;
				this.rv32zicsr_ext_pseudos();
				}
				break;

			case 10:
				_localctx = new RV32FPSEUDOSContext(_localctx);
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 77;
				this.rv32f_ext_pseudos();
				}
				break;

			case 11:
				_localctx = new RV32DPSEUDOSContext(_localctx);
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 78;
				this.rv32d_ext_pseudos();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public rv32i_ext(): Rv32i_extContext {
		let _localctx: Rv32i_extContext = new Rv32i_extContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, RISCVParser.RULE_rv32i_ext);
		let _la: number;
		try {
			this.state = 505;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case RISCVParser.I_LUI:
				_localctx = new LUIContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 81;
				this.match(RISCVParser.I_LUI);
				this.state = 82;
				this.match(RISCVParser.XREG);
				this.state = 84;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 83;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 86;
				this.expr(0);
				}
				break;
			case RISCVParser.I_AUIPC:
				_localctx = new AUIPCContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 87;
				this.match(RISCVParser.I_AUIPC);
				this.state = 88;
				this.match(RISCVParser.XREG);
				this.state = 90;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 89;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 92;
				this.expr(0);
				}
				break;
			case RISCVParser.I_JAL:
				_localctx = new JALContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 93;
				this.match(RISCVParser.I_JAL);
				this.state = 94;
				this.match(RISCVParser.XREG);
				this.state = 96;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 95;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 98;
				this.match(RISCVParser.ID);
				}
				break;
			case RISCVParser.I_JALR:
				_localctx = new JALRContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 99;
				this.match(RISCVParser.I_JALR);
				this.state = 100;
				this.match(RISCVParser.XREG);
				this.state = 102;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 101;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 114;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case RISCVParser.XREG:
					{
					this.state = 104;
					this.match(RISCVParser.XREG);
					this.state = 106;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === RISCVParser.T__0) {
						{
						this.state = 105;
						this.match(RISCVParser.T__0);
						}
					}

					this.state = 108;
					this.expr(0);
					}
					break;
				case RISCVParser.T__1:
				case RISCVParser.T__4:
				case RISCVParser.T__5:
				case RISCVParser.T__6:
				case RISCVParser.T__7:
				case RISCVParser.INT:
				case RISCVParser.SIGN:
				case RISCVParser.ID:
					{
					this.state = 109;
					this.expr(0);
					this.state = 110;
					this.match(RISCVParser.T__1);
					this.state = 111;
					this.match(RISCVParser.XREG);
					this.state = 112;
					this.match(RISCVParser.T__2);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
			case RISCVParser.I_BEQ:
				_localctx = new BEQContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 116;
				this.match(RISCVParser.I_BEQ);
				this.state = 117;
				this.match(RISCVParser.XREG);
				this.state = 119;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 118;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 121;
				this.match(RISCVParser.XREG);
				this.state = 123;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 122;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 125;
				this.match(RISCVParser.ID);
				}
				break;
			case RISCVParser.I_BNE:
				_localctx = new BNEContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 126;
				this.match(RISCVParser.I_BNE);
				this.state = 127;
				this.match(RISCVParser.XREG);
				this.state = 129;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 128;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 131;
				this.match(RISCVParser.XREG);
				this.state = 133;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 132;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 135;
				this.match(RISCVParser.ID);
				}
				break;
			case RISCVParser.I_BLT:
				_localctx = new BLTContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 136;
				this.match(RISCVParser.I_BLT);
				this.state = 137;
				this.match(RISCVParser.XREG);
				this.state = 139;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 138;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 141;
				this.match(RISCVParser.XREG);
				this.state = 143;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 142;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 145;
				this.match(RISCVParser.ID);
				}
				break;
			case RISCVParser.I_BGE:
				_localctx = new BGEContext(_localctx);
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 146;
				this.match(RISCVParser.I_BGE);
				this.state = 147;
				this.match(RISCVParser.XREG);
				this.state = 149;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 148;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 151;
				this.match(RISCVParser.XREG);
				this.state = 153;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 152;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 155;
				this.match(RISCVParser.ID);
				}
				break;
			case RISCVParser.I_BLTU:
				_localctx = new BLTUContext(_localctx);
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 156;
				this.match(RISCVParser.I_BLTU);
				this.state = 157;
				this.match(RISCVParser.XREG);
				this.state = 159;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 158;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 161;
				this.match(RISCVParser.XREG);
				this.state = 163;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 162;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 165;
				this.match(RISCVParser.ID);
				}
				break;
			case RISCVParser.I_BGEU:
				_localctx = new BGEUContext(_localctx);
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 166;
				this.match(RISCVParser.I_BGEU);
				this.state = 167;
				this.match(RISCVParser.XREG);
				this.state = 169;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 168;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 171;
				this.match(RISCVParser.XREG);
				this.state = 173;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 172;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 175;
				this.match(RISCVParser.ID);
				}
				break;
			case RISCVParser.I_LB:
				_localctx = new LBContext(_localctx);
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 176;
				this.match(RISCVParser.I_LB);
				this.state = 177;
				this.match(RISCVParser.XREG);
				this.state = 179;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 178;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 191;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case RISCVParser.XREG:
					{
					this.state = 181;
					this.match(RISCVParser.XREG);
					this.state = 183;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === RISCVParser.T__0) {
						{
						this.state = 182;
						this.match(RISCVParser.T__0);
						}
					}

					this.state = 185;
					this.expr(0);
					}
					break;
				case RISCVParser.T__1:
				case RISCVParser.T__4:
				case RISCVParser.T__5:
				case RISCVParser.T__6:
				case RISCVParser.T__7:
				case RISCVParser.INT:
				case RISCVParser.SIGN:
				case RISCVParser.ID:
					{
					this.state = 186;
					this.expr(0);
					this.state = 187;
					this.match(RISCVParser.T__1);
					this.state = 188;
					this.match(RISCVParser.XREG);
					this.state = 189;
					this.match(RISCVParser.T__2);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
			case RISCVParser.I_LH:
				_localctx = new LHContext(_localctx);
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 193;
				this.match(RISCVParser.I_LH);
				this.state = 194;
				this.match(RISCVParser.XREG);
				this.state = 196;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 195;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 208;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case RISCVParser.XREG:
					{
					this.state = 198;
					this.match(RISCVParser.XREG);
					this.state = 200;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === RISCVParser.T__0) {
						{
						this.state = 199;
						this.match(RISCVParser.T__0);
						}
					}

					this.state = 202;
					this.expr(0);
					}
					break;
				case RISCVParser.T__1:
				case RISCVParser.T__4:
				case RISCVParser.T__5:
				case RISCVParser.T__6:
				case RISCVParser.T__7:
				case RISCVParser.INT:
				case RISCVParser.SIGN:
				case RISCVParser.ID:
					{
					this.state = 203;
					this.expr(0);
					this.state = 204;
					this.match(RISCVParser.T__1);
					this.state = 205;
					this.match(RISCVParser.XREG);
					this.state = 206;
					this.match(RISCVParser.T__2);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
			case RISCVParser.I_LW:
				_localctx = new LWContext(_localctx);
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 210;
				this.match(RISCVParser.I_LW);
				this.state = 211;
				this.match(RISCVParser.XREG);
				this.state = 213;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 212;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 225;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case RISCVParser.XREG:
					{
					this.state = 215;
					this.match(RISCVParser.XREG);
					this.state = 217;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === RISCVParser.T__0) {
						{
						this.state = 216;
						this.match(RISCVParser.T__0);
						}
					}

					this.state = 219;
					this.expr(0);
					}
					break;
				case RISCVParser.T__1:
				case RISCVParser.T__4:
				case RISCVParser.T__5:
				case RISCVParser.T__6:
				case RISCVParser.T__7:
				case RISCVParser.INT:
				case RISCVParser.SIGN:
				case RISCVParser.ID:
					{
					this.state = 220;
					this.expr(0);
					this.state = 221;
					this.match(RISCVParser.T__1);
					this.state = 222;
					this.match(RISCVParser.XREG);
					this.state = 223;
					this.match(RISCVParser.T__2);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
			case RISCVParser.I_LBU:
				_localctx = new LBUContext(_localctx);
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 227;
				this.match(RISCVParser.I_LBU);
				this.state = 228;
				this.match(RISCVParser.XREG);
				this.state = 230;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 229;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 242;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case RISCVParser.XREG:
					{
					this.state = 232;
					this.match(RISCVParser.XREG);
					this.state = 234;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === RISCVParser.T__0) {
						{
						this.state = 233;
						this.match(RISCVParser.T__0);
						}
					}

					this.state = 236;
					this.expr(0);
					}
					break;
				case RISCVParser.T__1:
				case RISCVParser.T__4:
				case RISCVParser.T__5:
				case RISCVParser.T__6:
				case RISCVParser.T__7:
				case RISCVParser.INT:
				case RISCVParser.SIGN:
				case RISCVParser.ID:
					{
					this.state = 237;
					this.expr(0);
					this.state = 238;
					this.match(RISCVParser.T__1);
					this.state = 239;
					this.match(RISCVParser.XREG);
					this.state = 240;
					this.match(RISCVParser.T__2);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
			case RISCVParser.I_LHU:
				_localctx = new LHUContext(_localctx);
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 244;
				this.match(RISCVParser.I_LHU);
				this.state = 245;
				this.match(RISCVParser.XREG);
				this.state = 247;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 246;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 259;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case RISCVParser.XREG:
					{
					this.state = 249;
					this.match(RISCVParser.XREG);
					this.state = 251;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === RISCVParser.T__0) {
						{
						this.state = 250;
						this.match(RISCVParser.T__0);
						}
					}

					this.state = 253;
					this.expr(0);
					}
					break;
				case RISCVParser.T__1:
				case RISCVParser.T__4:
				case RISCVParser.T__5:
				case RISCVParser.T__6:
				case RISCVParser.T__7:
				case RISCVParser.INT:
				case RISCVParser.SIGN:
				case RISCVParser.ID:
					{
					this.state = 254;
					this.expr(0);
					this.state = 255;
					this.match(RISCVParser.T__1);
					this.state = 256;
					this.match(RISCVParser.XREG);
					this.state = 257;
					this.match(RISCVParser.T__2);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
			case RISCVParser.I_SB:
				_localctx = new SBContext(_localctx);
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 261;
				this.match(RISCVParser.I_SB);
				this.state = 262;
				this.match(RISCVParser.XREG);
				this.state = 264;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 263;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 276;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case RISCVParser.XREG:
					{
					this.state = 266;
					this.match(RISCVParser.XREG);
					this.state = 268;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === RISCVParser.T__0) {
						{
						this.state = 267;
						this.match(RISCVParser.T__0);
						}
					}

					this.state = 270;
					this.expr(0);
					}
					break;
				case RISCVParser.T__1:
				case RISCVParser.T__4:
				case RISCVParser.T__5:
				case RISCVParser.T__6:
				case RISCVParser.T__7:
				case RISCVParser.INT:
				case RISCVParser.SIGN:
				case RISCVParser.ID:
					{
					this.state = 271;
					this.expr(0);
					this.state = 272;
					this.match(RISCVParser.T__1);
					this.state = 273;
					this.match(RISCVParser.XREG);
					this.state = 274;
					this.match(RISCVParser.T__2);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
			case RISCVParser.I_SH:
				_localctx = new SHContext(_localctx);
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 278;
				this.match(RISCVParser.I_SH);
				this.state = 279;
				this.match(RISCVParser.XREG);
				this.state = 281;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 280;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 293;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case RISCVParser.XREG:
					{
					this.state = 283;
					this.match(RISCVParser.XREG);
					this.state = 285;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === RISCVParser.T__0) {
						{
						this.state = 284;
						this.match(RISCVParser.T__0);
						}
					}

					this.state = 287;
					this.expr(0);
					}
					break;
				case RISCVParser.T__1:
				case RISCVParser.T__4:
				case RISCVParser.T__5:
				case RISCVParser.T__6:
				case RISCVParser.T__7:
				case RISCVParser.INT:
				case RISCVParser.SIGN:
				case RISCVParser.ID:
					{
					this.state = 288;
					this.expr(0);
					this.state = 289;
					this.match(RISCVParser.T__1);
					this.state = 290;
					this.match(RISCVParser.XREG);
					this.state = 291;
					this.match(RISCVParser.T__2);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
			case RISCVParser.I_SW:
				_localctx = new SWContext(_localctx);
				this.enterOuterAlt(_localctx, 18);
				{
				this.state = 295;
				this.match(RISCVParser.I_SW);
				this.state = 296;
				this.match(RISCVParser.XREG);
				this.state = 298;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 297;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 310;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case RISCVParser.XREG:
					{
					this.state = 300;
					this.match(RISCVParser.XREG);
					this.state = 302;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === RISCVParser.T__0) {
						{
						this.state = 301;
						this.match(RISCVParser.T__0);
						}
					}

					this.state = 304;
					this.expr(0);
					}
					break;
				case RISCVParser.T__1:
				case RISCVParser.T__4:
				case RISCVParser.T__5:
				case RISCVParser.T__6:
				case RISCVParser.T__7:
				case RISCVParser.INT:
				case RISCVParser.SIGN:
				case RISCVParser.ID:
					{
					this.state = 305;
					this.expr(0);
					this.state = 306;
					this.match(RISCVParser.T__1);
					this.state = 307;
					this.match(RISCVParser.XREG);
					this.state = 308;
					this.match(RISCVParser.T__2);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
			case RISCVParser.I_ADDI:
				_localctx = new ADDIContext(_localctx);
				this.enterOuterAlt(_localctx, 19);
				{
				this.state = 312;
				this.match(RISCVParser.I_ADDI);
				this.state = 313;
				this.match(RISCVParser.XREG);
				this.state = 315;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 314;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 317;
				this.match(RISCVParser.XREG);
				this.state = 319;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 318;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 321;
				this.expr(0);
				}
				break;
			case RISCVParser.I_SLTI:
				_localctx = new SLTIContext(_localctx);
				this.enterOuterAlt(_localctx, 20);
				{
				this.state = 322;
				this.match(RISCVParser.I_SLTI);
				this.state = 323;
				this.match(RISCVParser.XREG);
				this.state = 325;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 324;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 327;
				this.match(RISCVParser.XREG);
				this.state = 329;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 328;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 331;
				this.expr(0);
				}
				break;
			case RISCVParser.I_SLTIU:
				_localctx = new SLTIUContext(_localctx);
				this.enterOuterAlt(_localctx, 21);
				{
				this.state = 332;
				this.match(RISCVParser.I_SLTIU);
				this.state = 333;
				this.match(RISCVParser.XREG);
				this.state = 335;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 334;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 337;
				this.match(RISCVParser.XREG);
				this.state = 339;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 338;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 341;
				this.expr(0);
				}
				break;
			case RISCVParser.I_XORI:
				_localctx = new XORIContext(_localctx);
				this.enterOuterAlt(_localctx, 22);
				{
				this.state = 342;
				this.match(RISCVParser.I_XORI);
				this.state = 343;
				this.match(RISCVParser.XREG);
				this.state = 345;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 344;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 347;
				this.match(RISCVParser.XREG);
				this.state = 349;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 348;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 351;
				this.expr(0);
				}
				break;
			case RISCVParser.I_ORI:
				_localctx = new ORIContext(_localctx);
				this.enterOuterAlt(_localctx, 23);
				{
				this.state = 352;
				this.match(RISCVParser.I_ORI);
				this.state = 353;
				this.match(RISCVParser.XREG);
				this.state = 355;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 354;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 357;
				this.match(RISCVParser.XREG);
				this.state = 359;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 358;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 361;
				this.expr(0);
				}
				break;
			case RISCVParser.I_ANDI:
				_localctx = new ANDIContext(_localctx);
				this.enterOuterAlt(_localctx, 24);
				{
				this.state = 362;
				this.match(RISCVParser.I_ANDI);
				this.state = 363;
				this.match(RISCVParser.XREG);
				this.state = 365;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 364;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 367;
				this.match(RISCVParser.XREG);
				this.state = 369;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 368;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 371;
				this.expr(0);
				}
				break;
			case RISCVParser.I_SLLI:
				_localctx = new SLLIContext(_localctx);
				this.enterOuterAlt(_localctx, 25);
				{
				this.state = 372;
				this.match(RISCVParser.I_SLLI);
				this.state = 373;
				this.match(RISCVParser.XREG);
				this.state = 375;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 374;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 377;
				this.match(RISCVParser.XREG);
				this.state = 379;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 378;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 381;
				this.expr(0);
				}
				break;
			case RISCVParser.I_SRLI:
				_localctx = new SRLIContext(_localctx);
				this.enterOuterAlt(_localctx, 26);
				{
				this.state = 382;
				this.match(RISCVParser.I_SRLI);
				this.state = 383;
				this.match(RISCVParser.XREG);
				this.state = 385;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 384;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 387;
				this.match(RISCVParser.XREG);
				this.state = 389;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 388;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 391;
				this.expr(0);
				}
				break;
			case RISCVParser.I_SRAI:
				_localctx = new SRAIContext(_localctx);
				this.enterOuterAlt(_localctx, 27);
				{
				this.state = 392;
				this.match(RISCVParser.I_SRAI);
				this.state = 393;
				this.match(RISCVParser.XREG);
				this.state = 395;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 394;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 397;
				this.match(RISCVParser.XREG);
				this.state = 399;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 398;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 401;
				this.expr(0);
				}
				break;
			case RISCVParser.I_ADD:
				_localctx = new ADDContext(_localctx);
				this.enterOuterAlt(_localctx, 28);
				{
				this.state = 402;
				this.match(RISCVParser.I_ADD);
				this.state = 403;
				this.match(RISCVParser.XREG);
				this.state = 405;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 404;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 407;
				this.match(RISCVParser.XREG);
				this.state = 409;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 408;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 411;
				this.match(RISCVParser.XREG);
				}
				break;
			case RISCVParser.I_SUB:
				_localctx = new SUBContext(_localctx);
				this.enterOuterAlt(_localctx, 29);
				{
				this.state = 412;
				this.match(RISCVParser.I_SUB);
				this.state = 413;
				this.match(RISCVParser.XREG);
				this.state = 415;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 414;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 417;
				this.match(RISCVParser.XREG);
				this.state = 419;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 418;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 421;
				this.match(RISCVParser.XREG);
				}
				break;
			case RISCVParser.I_SLL:
				_localctx = new SLLContext(_localctx);
				this.enterOuterAlt(_localctx, 30);
				{
				this.state = 422;
				this.match(RISCVParser.I_SLL);
				this.state = 423;
				this.match(RISCVParser.XREG);
				this.state = 425;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 424;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 427;
				this.match(RISCVParser.XREG);
				this.state = 429;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 428;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 431;
				this.match(RISCVParser.XREG);
				}
				break;
			case RISCVParser.I_SLT:
				_localctx = new SLTContext(_localctx);
				this.enterOuterAlt(_localctx, 31);
				{
				this.state = 432;
				this.match(RISCVParser.I_SLT);
				this.state = 433;
				this.match(RISCVParser.XREG);
				this.state = 435;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 434;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 437;
				this.match(RISCVParser.XREG);
				this.state = 439;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 438;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 441;
				this.match(RISCVParser.XREG);
				}
				break;
			case RISCVParser.I_SLTU:
				_localctx = new SLTUContext(_localctx);
				this.enterOuterAlt(_localctx, 32);
				{
				this.state = 442;
				this.match(RISCVParser.I_SLTU);
				this.state = 443;
				this.match(RISCVParser.XREG);
				this.state = 445;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 444;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 447;
				this.match(RISCVParser.XREG);
				this.state = 449;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 448;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 451;
				this.match(RISCVParser.XREG);
				}
				break;
			case RISCVParser.I_XOR:
				_localctx = new XORContext(_localctx);
				this.enterOuterAlt(_localctx, 33);
				{
				this.state = 452;
				this.match(RISCVParser.I_XOR);
				this.state = 453;
				this.match(RISCVParser.XREG);
				this.state = 455;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 454;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 457;
				this.match(RISCVParser.XREG);
				this.state = 459;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 458;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 461;
				this.match(RISCVParser.XREG);
				}
				break;
			case RISCVParser.I_SRL:
				_localctx = new SRLContext(_localctx);
				this.enterOuterAlt(_localctx, 34);
				{
				this.state = 462;
				this.match(RISCVParser.I_SRL);
				this.state = 463;
				this.match(RISCVParser.XREG);
				this.state = 465;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 464;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 467;
				this.match(RISCVParser.XREG);
				this.state = 469;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 468;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 471;
				this.match(RISCVParser.XREG);
				}
				break;
			case RISCVParser.I_SRA:
				_localctx = new SRAContext(_localctx);
				this.enterOuterAlt(_localctx, 35);
				{
				this.state = 472;
				this.match(RISCVParser.I_SRA);
				this.state = 473;
				this.match(RISCVParser.XREG);
				this.state = 475;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 474;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 477;
				this.match(RISCVParser.XREG);
				this.state = 479;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 478;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 481;
				this.match(RISCVParser.XREG);
				}
				break;
			case RISCVParser.I_OR:
				_localctx = new ORContext(_localctx);
				this.enterOuterAlt(_localctx, 36);
				{
				this.state = 482;
				this.match(RISCVParser.I_OR);
				this.state = 483;
				this.match(RISCVParser.XREG);
				this.state = 485;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 484;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 487;
				this.match(RISCVParser.XREG);
				this.state = 489;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 488;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 491;
				this.match(RISCVParser.XREG);
				}
				break;
			case RISCVParser.I_AND:
				_localctx = new ANDContext(_localctx);
				this.enterOuterAlt(_localctx, 37);
				{
				this.state = 492;
				this.match(RISCVParser.I_AND);
				this.state = 493;
				this.match(RISCVParser.XREG);
				this.state = 495;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 494;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 497;
				this.match(RISCVParser.XREG);
				this.state = 499;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 498;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 501;
				this.match(RISCVParser.XREG);
				}
				break;
			case RISCVParser.I_FENCE:
				_localctx = new FENCEContext(_localctx);
				this.enterOuterAlt(_localctx, 38);
				{
				this.state = 502;
				this.match(RISCVParser.I_FENCE);
				}
				break;
			case RISCVParser.I_ECALL:
				_localctx = new ECALLContext(_localctx);
				this.enterOuterAlt(_localctx, 39);
				{
				this.state = 503;
				this.match(RISCVParser.I_ECALL);
				}
				break;
			case RISCVParser.I_EBREAK:
				_localctx = new EBREAKContext(_localctx);
				this.enterOuterAlt(_localctx, 40);
				{
				this.state = 504;
				this.match(RISCVParser.I_EBREAK);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public rv32zifencei_ext(): Rv32zifencei_extContext {
		let _localctx: Rv32zifencei_extContext = new Rv32zifencei_extContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, RISCVParser.RULE_rv32zifencei_ext);
		try {
			_localctx = new FENCEIContext(_localctx);
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 507;
			this.match(RISCVParser.I_FENCEI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public rv32zicsr_ext(): Rv32zicsr_extContext {
		let _localctx: Rv32zicsr_extContext = new Rv32zicsr_extContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, RISCVParser.RULE_rv32zicsr_ext);
		let _la: number;
		try {
			this.state = 575;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case RISCVParser.I_CSRRW:
				_localctx = new CSRRWContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 509;
				this.match(RISCVParser.I_CSRRW);
				this.state = 510;
				this.match(RISCVParser.XREG);
				this.state = 512;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 511;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 514;
				this.expr(0);
				this.state = 516;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 515;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 518;
				this.match(RISCVParser.XREG);
				}
				break;
			case RISCVParser.I_CSRRS:
				_localctx = new CSRRSContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 520;
				this.match(RISCVParser.I_CSRRS);
				this.state = 521;
				this.match(RISCVParser.XREG);
				this.state = 523;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 522;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 525;
				this.expr(0);
				this.state = 527;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 526;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 529;
				this.match(RISCVParser.XREG);
				}
				break;
			case RISCVParser.I_CSRRC:
				_localctx = new CSRRCContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 531;
				this.match(RISCVParser.I_CSRRC);
				this.state = 532;
				this.match(RISCVParser.XREG);
				this.state = 534;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 533;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 536;
				this.expr(0);
				this.state = 538;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 537;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 540;
				this.match(RISCVParser.XREG);
				}
				break;
			case RISCVParser.I_CSRRWI:
				_localctx = new CSRRWIContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 542;
				this.match(RISCVParser.I_CSRRWI);
				this.state = 543;
				this.match(RISCVParser.XREG);
				this.state = 545;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 544;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 547;
				this.expr(0);
				this.state = 549;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 548;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 551;
				this.match(RISCVParser.INT);
				}
				break;
			case RISCVParser.I_CSRRSI:
				_localctx = new CSRRSIContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 553;
				this.match(RISCVParser.I_CSRRSI);
				this.state = 554;
				this.match(RISCVParser.XREG);
				this.state = 556;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 555;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 558;
				this.expr(0);
				this.state = 560;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 559;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 562;
				this.match(RISCVParser.INT);
				}
				break;
			case RISCVParser.I_CSRRCI:
				_localctx = new CSRRCIContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 564;
				this.match(RISCVParser.I_CSRRCI);
				this.state = 565;
				this.match(RISCVParser.XREG);
				this.state = 567;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 566;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 569;
				this.expr(0);
				this.state = 571;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 570;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 573;
				this.match(RISCVParser.INT);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public rv32m_ext(): Rv32m_extContext {
		let _localctx: Rv32m_extContext = new Rv32m_extContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, RISCVParser.RULE_rv32m_ext);
		let _la: number;
		try {
			this.state = 657;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case RISCVParser.I_MUL:
				_localctx = new MULContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 577;
				this.match(RISCVParser.I_MUL);
				this.state = 578;
				this.match(RISCVParser.XREG);
				this.state = 580;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 579;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 582;
				this.match(RISCVParser.XREG);
				this.state = 584;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 583;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 586;
				this.match(RISCVParser.XREG);
				}
				break;
			case RISCVParser.I_MULH:
				_localctx = new MULHContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 587;
				this.match(RISCVParser.I_MULH);
				this.state = 588;
				this.match(RISCVParser.XREG);
				this.state = 590;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 589;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 592;
				this.match(RISCVParser.XREG);
				this.state = 594;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 593;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 596;
				this.match(RISCVParser.XREG);
				}
				break;
			case RISCVParser.I_MULHSU:
				_localctx = new MULHSUContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 597;
				this.match(RISCVParser.I_MULHSU);
				this.state = 598;
				this.match(RISCVParser.XREG);
				this.state = 600;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 599;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 602;
				this.match(RISCVParser.XREG);
				this.state = 604;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 603;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 606;
				this.match(RISCVParser.XREG);
				}
				break;
			case RISCVParser.I_MULHU:
				_localctx = new MULHUContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 607;
				this.match(RISCVParser.I_MULHU);
				this.state = 608;
				this.match(RISCVParser.XREG);
				this.state = 610;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 609;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 612;
				this.match(RISCVParser.XREG);
				this.state = 614;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 613;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 616;
				this.match(RISCVParser.XREG);
				}
				break;
			case RISCVParser.I_DIV:
				_localctx = new DIVContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 617;
				this.match(RISCVParser.I_DIV);
				this.state = 618;
				this.match(RISCVParser.XREG);
				this.state = 620;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 619;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 622;
				this.match(RISCVParser.XREG);
				this.state = 624;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 623;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 626;
				this.match(RISCVParser.XREG);
				}
				break;
			case RISCVParser.I_DIVU:
				_localctx = new DIVUContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 627;
				this.match(RISCVParser.I_DIVU);
				this.state = 628;
				this.match(RISCVParser.XREG);
				this.state = 630;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 629;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 632;
				this.match(RISCVParser.XREG);
				this.state = 634;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 633;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 636;
				this.match(RISCVParser.XREG);
				}
				break;
			case RISCVParser.I_REM:
				_localctx = new REMContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 637;
				this.match(RISCVParser.I_REM);
				this.state = 638;
				this.match(RISCVParser.XREG);
				this.state = 640;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 639;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 642;
				this.match(RISCVParser.XREG);
				this.state = 644;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 643;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 646;
				this.match(RISCVParser.XREG);
				}
				break;
			case RISCVParser.I_REMU:
				_localctx = new REMUContext(_localctx);
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 647;
				this.match(RISCVParser.I_REMU);
				this.state = 648;
				this.match(RISCVParser.XREG);
				this.state = 650;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 649;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 652;
				this.match(RISCVParser.XREG);
				this.state = 654;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 653;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 656;
				this.match(RISCVParser.XREG);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public rv32a_ext(): Rv32a_extContext {
		let _localctx: Rv32a_extContext = new Rv32a_extContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, RISCVParser.RULE_rv32a_ext);
		let _la: number;
		try {
			this.state = 831;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case RISCVParser.I_LRW:
				_localctx = new LRWContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 659;
				this.match(RISCVParser.I_LRW);
				this.state = 660;
				this.match(RISCVParser.XREG);
				this.state = 662;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 661;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 665;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__1) {
					{
					this.state = 664;
					this.match(RISCVParser.T__1);
					}
				}

				this.state = 667;
				this.match(RISCVParser.XREG);
				this.state = 669;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__2) {
					{
					this.state = 668;
					this.match(RISCVParser.T__2);
					}
				}

				}
				break;
			case RISCVParser.I_SCW:
				_localctx = new SCWContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 671;
				this.match(RISCVParser.I_SCW);
				this.state = 672;
				this.match(RISCVParser.XREG);
				this.state = 674;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 673;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 676;
				this.match(RISCVParser.XREG);
				this.state = 678;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 677;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 681;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__1) {
					{
					this.state = 680;
					this.match(RISCVParser.T__1);
					}
				}

				this.state = 683;
				this.match(RISCVParser.XREG);
				this.state = 685;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__2) {
					{
					this.state = 684;
					this.match(RISCVParser.T__2);
					}
				}

				}
				break;
			case RISCVParser.I_AMOSWAPW:
				_localctx = new AMOSWAPWContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 687;
				this.match(RISCVParser.I_AMOSWAPW);
				this.state = 688;
				this.match(RISCVParser.XREG);
				this.state = 690;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 689;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 692;
				this.match(RISCVParser.XREG);
				this.state = 694;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 693;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 697;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__1) {
					{
					this.state = 696;
					this.match(RISCVParser.T__1);
					}
				}

				this.state = 699;
				this.match(RISCVParser.XREG);
				this.state = 701;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__2) {
					{
					this.state = 700;
					this.match(RISCVParser.T__2);
					}
				}

				}
				break;
			case RISCVParser.I_AMOADDW:
				_localctx = new AMOADDWContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 703;
				this.match(RISCVParser.I_AMOADDW);
				this.state = 704;
				this.match(RISCVParser.XREG);
				this.state = 706;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 705;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 708;
				this.match(RISCVParser.XREG);
				this.state = 710;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 709;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 713;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__1) {
					{
					this.state = 712;
					this.match(RISCVParser.T__1);
					}
				}

				this.state = 715;
				this.match(RISCVParser.XREG);
				this.state = 717;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__2) {
					{
					this.state = 716;
					this.match(RISCVParser.T__2);
					}
				}

				}
				break;
			case RISCVParser.I_AMOXORW:
				_localctx = new AMOXORWContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 719;
				this.match(RISCVParser.I_AMOXORW);
				this.state = 720;
				this.match(RISCVParser.XREG);
				this.state = 722;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 721;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 724;
				this.match(RISCVParser.XREG);
				this.state = 726;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 725;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 729;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__1) {
					{
					this.state = 728;
					this.match(RISCVParser.T__1);
					}
				}

				this.state = 731;
				this.match(RISCVParser.XREG);
				this.state = 733;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__2) {
					{
					this.state = 732;
					this.match(RISCVParser.T__2);
					}
				}

				}
				break;
			case RISCVParser.I_AMOANDW:
				_localctx = new AMOANDWContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 735;
				this.match(RISCVParser.I_AMOANDW);
				this.state = 736;
				this.match(RISCVParser.XREG);
				this.state = 738;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 737;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 740;
				this.match(RISCVParser.XREG);
				this.state = 742;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 741;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 745;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__1) {
					{
					this.state = 744;
					this.match(RISCVParser.T__1);
					}
				}

				this.state = 747;
				this.match(RISCVParser.XREG);
				this.state = 749;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__2) {
					{
					this.state = 748;
					this.match(RISCVParser.T__2);
					}
				}

				}
				break;
			case RISCVParser.I_AMOORW:
				_localctx = new AMOORWContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 751;
				this.match(RISCVParser.I_AMOORW);
				this.state = 752;
				this.match(RISCVParser.XREG);
				this.state = 754;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 753;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 756;
				this.match(RISCVParser.XREG);
				this.state = 758;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 757;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 761;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__1) {
					{
					this.state = 760;
					this.match(RISCVParser.T__1);
					}
				}

				this.state = 763;
				this.match(RISCVParser.XREG);
				this.state = 765;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__2) {
					{
					this.state = 764;
					this.match(RISCVParser.T__2);
					}
				}

				}
				break;
			case RISCVParser.I_AMOMINW:
				_localctx = new AMOMINWContext(_localctx);
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 767;
				this.match(RISCVParser.I_AMOMINW);
				this.state = 768;
				this.match(RISCVParser.XREG);
				this.state = 770;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 769;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 772;
				this.match(RISCVParser.XREG);
				this.state = 774;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 773;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 777;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__1) {
					{
					this.state = 776;
					this.match(RISCVParser.T__1);
					}
				}

				this.state = 779;
				this.match(RISCVParser.XREG);
				this.state = 781;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__2) {
					{
					this.state = 780;
					this.match(RISCVParser.T__2);
					}
				}

				}
				break;
			case RISCVParser.I_AMOMAXW:
				_localctx = new AMOMAXWContext(_localctx);
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 783;
				this.match(RISCVParser.I_AMOMAXW);
				this.state = 784;
				this.match(RISCVParser.XREG);
				this.state = 786;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 785;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 788;
				this.match(RISCVParser.XREG);
				this.state = 790;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 789;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 793;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__1) {
					{
					this.state = 792;
					this.match(RISCVParser.T__1);
					}
				}

				this.state = 795;
				this.match(RISCVParser.XREG);
				this.state = 797;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__2) {
					{
					this.state = 796;
					this.match(RISCVParser.T__2);
					}
				}

				}
				break;
			case RISCVParser.I_AMOMINUW:
				_localctx = new AMOMINUWContext(_localctx);
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 799;
				this.match(RISCVParser.I_AMOMINUW);
				this.state = 800;
				this.match(RISCVParser.XREG);
				this.state = 802;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 801;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 804;
				this.match(RISCVParser.XREG);
				this.state = 806;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 805;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 809;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__1) {
					{
					this.state = 808;
					this.match(RISCVParser.T__1);
					}
				}

				this.state = 811;
				this.match(RISCVParser.XREG);
				this.state = 813;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__2) {
					{
					this.state = 812;
					this.match(RISCVParser.T__2);
					}
				}

				}
				break;
			case RISCVParser.I_AMOMAXUW:
				_localctx = new AMOMAXUWContext(_localctx);
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 815;
				this.match(RISCVParser.I_AMOMAXUW);
				this.state = 816;
				this.match(RISCVParser.XREG);
				this.state = 818;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 817;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 820;
				this.match(RISCVParser.XREG);
				this.state = 822;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 821;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 825;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__1) {
					{
					this.state = 824;
					this.match(RISCVParser.T__1);
					}
				}

				this.state = 827;
				this.match(RISCVParser.XREG);
				this.state = 829;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__2) {
					{
					this.state = 828;
					this.match(RISCVParser.T__2);
					}
				}

				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public rv32f_ext(): Rv32f_extContext {
		let _localctx: Rv32f_extContext = new Rv32f_extContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, RISCVParser.RULE_rv32f_ext);
		let _la: number;
		try {
			this.state = 1107;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case RISCVParser.I_FLW:
				_localctx = new FLWContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 833;
				this.match(RISCVParser.I_FLW);
				this.state = 834;
				this.match(RISCVParser.FREG);
				this.state = 836;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 835;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 848;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case RISCVParser.XREG:
					{
					this.state = 838;
					this.match(RISCVParser.XREG);
					this.state = 840;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === RISCVParser.T__0) {
						{
						this.state = 839;
						this.match(RISCVParser.T__0);
						}
					}

					this.state = 842;
					this.expr(0);
					}
					break;
				case RISCVParser.T__1:
				case RISCVParser.T__4:
				case RISCVParser.T__5:
				case RISCVParser.T__6:
				case RISCVParser.T__7:
				case RISCVParser.INT:
				case RISCVParser.SIGN:
				case RISCVParser.ID:
					{
					this.state = 843;
					this.expr(0);
					this.state = 844;
					this.match(RISCVParser.T__1);
					this.state = 845;
					this.match(RISCVParser.XREG);
					this.state = 846;
					this.match(RISCVParser.T__2);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
			case RISCVParser.I_FSW:
				_localctx = new FSWContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 850;
				this.match(RISCVParser.I_FSW);
				this.state = 869;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case RISCVParser.XREG:
					{
					this.state = 851;
					this.match(RISCVParser.XREG);
					this.state = 853;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === RISCVParser.T__0) {
						{
						this.state = 852;
						this.match(RISCVParser.T__0);
						}
					}

					this.state = 855;
					this.match(RISCVParser.FREG);
					this.state = 857;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === RISCVParser.T__0) {
						{
						this.state = 856;
						this.match(RISCVParser.T__0);
						}
					}

					this.state = 859;
					this.expr(0);
					}
					break;
				case RISCVParser.FREG:
					{
					this.state = 860;
					this.match(RISCVParser.FREG);
					this.state = 862;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === RISCVParser.T__0) {
						{
						this.state = 861;
						this.match(RISCVParser.T__0);
						}
					}

					this.state = 864;
					this.expr(0);
					this.state = 865;
					this.match(RISCVParser.T__1);
					this.state = 866;
					this.match(RISCVParser.XREG);
					this.state = 867;
					this.match(RISCVParser.T__2);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
			case RISCVParser.I_FMADDS:
				_localctx = new FMADDSContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 871;
				this.match(RISCVParser.I_FMADDS);
				this.state = 872;
				this.match(RISCVParser.FREG);
				this.state = 874;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 873;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 876;
				this.match(RISCVParser.FREG);
				this.state = 878;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 877;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 880;
				this.match(RISCVParser.FREG);
				this.state = 882;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 881;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 884;
				this.match(RISCVParser.FREG);
				}
				break;
			case RISCVParser.I_FMSUBS:
				_localctx = new FMSUBSContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 885;
				this.match(RISCVParser.I_FMSUBS);
				this.state = 886;
				this.match(RISCVParser.FREG);
				this.state = 888;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 887;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 890;
				this.match(RISCVParser.FREG);
				this.state = 892;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 891;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 894;
				this.match(RISCVParser.FREG);
				this.state = 896;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 895;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 898;
				this.match(RISCVParser.FREG);
				}
				break;
			case RISCVParser.I_FNMSUBS:
				_localctx = new FNMSUBSContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 899;
				this.match(RISCVParser.I_FNMSUBS);
				this.state = 900;
				this.match(RISCVParser.FREG);
				this.state = 902;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 901;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 904;
				this.match(RISCVParser.FREG);
				this.state = 906;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 905;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 908;
				this.match(RISCVParser.FREG);
				this.state = 910;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 909;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 912;
				this.match(RISCVParser.FREG);
				}
				break;
			case RISCVParser.I_FNMADDS:
				_localctx = new FNMADDSContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 913;
				this.match(RISCVParser.I_FNMADDS);
				this.state = 914;
				this.match(RISCVParser.FREG);
				this.state = 916;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 915;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 918;
				this.match(RISCVParser.FREG);
				this.state = 920;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 919;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 922;
				this.match(RISCVParser.FREG);
				this.state = 924;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 923;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 926;
				this.match(RISCVParser.FREG);
				}
				break;
			case RISCVParser.I_FADDS:
				_localctx = new FADDSContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 927;
				this.match(RISCVParser.I_FADDS);
				this.state = 928;
				this.match(RISCVParser.FREG);
				this.state = 930;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 929;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 932;
				this.match(RISCVParser.FREG);
				this.state = 934;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 933;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 936;
				this.match(RISCVParser.FREG);
				}
				break;
			case RISCVParser.I_FSUBS:
				_localctx = new FSUBSContext(_localctx);
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 937;
				this.match(RISCVParser.I_FSUBS);
				this.state = 938;
				this.match(RISCVParser.FREG);
				this.state = 940;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 939;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 942;
				this.match(RISCVParser.FREG);
				this.state = 944;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 943;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 946;
				this.match(RISCVParser.FREG);
				}
				break;
			case RISCVParser.I_FMULS:
				_localctx = new FMULSContext(_localctx);
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 947;
				this.match(RISCVParser.I_FMULS);
				this.state = 948;
				this.match(RISCVParser.FREG);
				this.state = 950;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 949;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 952;
				this.match(RISCVParser.FREG);
				this.state = 954;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 953;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 956;
				this.match(RISCVParser.FREG);
				}
				break;
			case RISCVParser.I_FDIVS:
				_localctx = new FDIVSContext(_localctx);
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 957;
				this.match(RISCVParser.I_FDIVS);
				this.state = 958;
				this.match(RISCVParser.FREG);
				this.state = 960;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 959;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 962;
				this.match(RISCVParser.FREG);
				this.state = 964;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 963;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 966;
				this.match(RISCVParser.FREG);
				}
				break;
			case RISCVParser.I_FSQRTS:
				_localctx = new FSQRTSContext(_localctx);
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 967;
				this.match(RISCVParser.I_FSQRTS);
				this.state = 968;
				this.match(RISCVParser.FREG);
				this.state = 970;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 969;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 972;
				this.match(RISCVParser.FREG);
				}
				break;
			case RISCVParser.I_FSGNJS:
				_localctx = new FSGNJSContext(_localctx);
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 973;
				this.match(RISCVParser.I_FSGNJS);
				this.state = 974;
				this.match(RISCVParser.FREG);
				this.state = 976;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 975;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 978;
				this.match(RISCVParser.FREG);
				this.state = 980;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 979;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 982;
				this.match(RISCVParser.FREG);
				}
				break;
			case RISCVParser.I_FSGNJNS:
				_localctx = new FSGNJNSContext(_localctx);
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 983;
				this.match(RISCVParser.I_FSGNJNS);
				this.state = 984;
				this.match(RISCVParser.FREG);
				this.state = 986;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 985;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 988;
				this.match(RISCVParser.FREG);
				this.state = 990;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 989;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 992;
				this.match(RISCVParser.FREG);
				}
				break;
			case RISCVParser.I_FSGNJXS:
				_localctx = new FSGNJXSContext(_localctx);
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 993;
				this.match(RISCVParser.I_FSGNJXS);
				this.state = 994;
				this.match(RISCVParser.FREG);
				this.state = 996;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 995;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 998;
				this.match(RISCVParser.FREG);
				this.state = 1000;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 999;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1002;
				this.match(RISCVParser.FREG);
				}
				break;
			case RISCVParser.I_FMINS:
				_localctx = new FMINSContext(_localctx);
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 1003;
				this.match(RISCVParser.I_FMINS);
				this.state = 1004;
				this.match(RISCVParser.FREG);
				this.state = 1006;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1005;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1008;
				this.match(RISCVParser.FREG);
				this.state = 1010;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1009;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1012;
				this.match(RISCVParser.FREG);
				}
				break;
			case RISCVParser.I_FMAXS:
				_localctx = new FMAXSContext(_localctx);
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 1013;
				this.match(RISCVParser.I_FMAXS);
				this.state = 1014;
				this.match(RISCVParser.FREG);
				this.state = 1016;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1015;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1018;
				this.match(RISCVParser.FREG);
				this.state = 1020;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1019;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1022;
				this.match(RISCVParser.FREG);
				}
				break;
			case RISCVParser.I_FCVTWS:
				_localctx = new FCVTWSContext(_localctx);
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 1023;
				this.match(RISCVParser.I_FCVTWS);
				this.state = 1024;
				this.match(RISCVParser.XREG);
				this.state = 1026;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1025;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1028;
				this.match(RISCVParser.FREG);
				}
				break;
			case RISCVParser.I_FCVTWUS:
				_localctx = new FCVTWUSContext(_localctx);
				this.enterOuterAlt(_localctx, 18);
				{
				this.state = 1029;
				this.match(RISCVParser.I_FCVTWUS);
				this.state = 1030;
				this.match(RISCVParser.XREG);
				this.state = 1032;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1031;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1034;
				this.match(RISCVParser.FREG);
				}
				break;
			case RISCVParser.I_FMVXW:
				_localctx = new FMVXWContext(_localctx);
				this.enterOuterAlt(_localctx, 19);
				{
				this.state = 1035;
				this.match(RISCVParser.I_FMVXW);
				this.state = 1036;
				this.match(RISCVParser.XREG);
				this.state = 1038;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1037;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1040;
				this.match(RISCVParser.FREG);
				}
				break;
			case RISCVParser.I_FMVXS:
				_localctx = new FMVXSContext(_localctx);
				this.enterOuterAlt(_localctx, 20);
				{
				this.state = 1041;
				this.match(RISCVParser.I_FMVXS);
				this.state = 1042;
				this.match(RISCVParser.XREG);
				this.state = 1044;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1043;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1046;
				this.match(RISCVParser.FREG);
				}
				break;
			case RISCVParser.I_FEQS:
				_localctx = new FEQSContext(_localctx);
				this.enterOuterAlt(_localctx, 21);
				{
				this.state = 1047;
				this.match(RISCVParser.I_FEQS);
				this.state = 1048;
				this.match(RISCVParser.XREG);
				this.state = 1050;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1049;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1052;
				this.match(RISCVParser.FREG);
				this.state = 1054;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1053;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1056;
				this.match(RISCVParser.FREG);
				}
				break;
			case RISCVParser.I_FLTS:
				_localctx = new FLTSContext(_localctx);
				this.enterOuterAlt(_localctx, 22);
				{
				this.state = 1057;
				this.match(RISCVParser.I_FLTS);
				this.state = 1058;
				this.match(RISCVParser.XREG);
				this.state = 1060;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1059;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1062;
				this.match(RISCVParser.FREG);
				this.state = 1064;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1063;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1066;
				this.match(RISCVParser.FREG);
				}
				break;
			case RISCVParser.I_FLES:
				_localctx = new FLESContext(_localctx);
				this.enterOuterAlt(_localctx, 23);
				{
				this.state = 1067;
				this.match(RISCVParser.I_FLES);
				this.state = 1068;
				this.match(RISCVParser.XREG);
				this.state = 1070;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1069;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1072;
				this.match(RISCVParser.FREG);
				this.state = 1074;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1073;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1076;
				this.match(RISCVParser.FREG);
				}
				break;
			case RISCVParser.I_FCLASSS:
				_localctx = new FCLASSSContext(_localctx);
				this.enterOuterAlt(_localctx, 24);
				{
				this.state = 1077;
				this.match(RISCVParser.I_FCLASSS);
				this.state = 1078;
				this.match(RISCVParser.XREG);
				this.state = 1080;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1079;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1082;
				this.match(RISCVParser.FREG);
				}
				break;
			case RISCVParser.I_FCVTSW:
				_localctx = new FCVTSWContext(_localctx);
				this.enterOuterAlt(_localctx, 25);
				{
				this.state = 1083;
				this.match(RISCVParser.I_FCVTSW);
				this.state = 1084;
				this.match(RISCVParser.FREG);
				this.state = 1086;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1085;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1088;
				this.match(RISCVParser.XREG);
				}
				break;
			case RISCVParser.I_FCVTSWU:
				_localctx = new FCVTSWUContext(_localctx);
				this.enterOuterAlt(_localctx, 26);
				{
				this.state = 1089;
				this.match(RISCVParser.I_FCVTSWU);
				this.state = 1090;
				this.match(RISCVParser.FREG);
				this.state = 1092;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1091;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1094;
				this.match(RISCVParser.XREG);
				}
				break;
			case RISCVParser.I_FMVWX:
				_localctx = new FMVWXContext(_localctx);
				this.enterOuterAlt(_localctx, 27);
				{
				this.state = 1095;
				this.match(RISCVParser.I_FMVWX);
				this.state = 1096;
				this.match(RISCVParser.FREG);
				this.state = 1098;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1097;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1100;
				this.match(RISCVParser.XREG);
				}
				break;
			case RISCVParser.I_FMVSX:
				_localctx = new FMVSXContext(_localctx);
				this.enterOuterAlt(_localctx, 28);
				{
				this.state = 1101;
				this.match(RISCVParser.I_FMVSX);
				this.state = 1102;
				this.match(RISCVParser.FREG);
				this.state = 1104;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1103;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1106;
				this.match(RISCVParser.XREG);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public rv32d_ext(): Rv32d_extContext {
		let _localctx: Rv32d_extContext = new Rv32d_extContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, RISCVParser.RULE_rv32d_ext);
		let _la: number;
		try {
			this.state = 1371;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case RISCVParser.I_FLD:
				_localctx = new FLDContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1109;
				this.match(RISCVParser.I_FLD);
				this.state = 1110;
				this.match(RISCVParser.FREG);
				this.state = 1112;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1111;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1124;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case RISCVParser.XREG:
					{
					this.state = 1114;
					this.match(RISCVParser.XREG);
					this.state = 1116;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === RISCVParser.T__0) {
						{
						this.state = 1115;
						this.match(RISCVParser.T__0);
						}
					}

					this.state = 1118;
					this.expr(0);
					}
					break;
				case RISCVParser.T__1:
				case RISCVParser.T__4:
				case RISCVParser.T__5:
				case RISCVParser.T__6:
				case RISCVParser.T__7:
				case RISCVParser.INT:
				case RISCVParser.SIGN:
				case RISCVParser.ID:
					{
					this.state = 1119;
					this.expr(0);
					this.state = 1120;
					this.match(RISCVParser.T__1);
					this.state = 1121;
					this.match(RISCVParser.XREG);
					this.state = 1122;
					this.match(RISCVParser.T__2);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
			case RISCVParser.I_FSD:
				_localctx = new FSDContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1126;
				this.match(RISCVParser.I_FSD);
				this.state = 1145;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case RISCVParser.XREG:
					{
					this.state = 1127;
					this.match(RISCVParser.XREG);
					this.state = 1129;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === RISCVParser.T__0) {
						{
						this.state = 1128;
						this.match(RISCVParser.T__0);
						}
					}

					this.state = 1131;
					this.match(RISCVParser.FREG);
					this.state = 1133;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === RISCVParser.T__0) {
						{
						this.state = 1132;
						this.match(RISCVParser.T__0);
						}
					}

					this.state = 1135;
					this.expr(0);
					}
					break;
				case RISCVParser.FREG:
					{
					this.state = 1136;
					this.match(RISCVParser.FREG);
					this.state = 1138;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === RISCVParser.T__0) {
						{
						this.state = 1137;
						this.match(RISCVParser.T__0);
						}
					}

					this.state = 1140;
					this.expr(0);
					this.state = 1141;
					this.match(RISCVParser.T__1);
					this.state = 1142;
					this.match(RISCVParser.XREG);
					this.state = 1143;
					this.match(RISCVParser.T__2);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
			case RISCVParser.I_FMADDD:
				_localctx = new FMADDDContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1147;
				this.match(RISCVParser.I_FMADDD);
				this.state = 1148;
				this.match(RISCVParser.FREG);
				this.state = 1150;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1149;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1152;
				this.match(RISCVParser.FREG);
				this.state = 1154;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1153;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1156;
				this.match(RISCVParser.FREG);
				this.state = 1158;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1157;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1160;
				this.match(RISCVParser.FREG);
				}
				break;
			case RISCVParser.I_FMSUBD:
				_localctx = new FMSUBDContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1161;
				this.match(RISCVParser.I_FMSUBD);
				this.state = 1162;
				this.match(RISCVParser.FREG);
				this.state = 1164;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1163;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1166;
				this.match(RISCVParser.FREG);
				this.state = 1168;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1167;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1170;
				this.match(RISCVParser.FREG);
				this.state = 1172;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1171;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1174;
				this.match(RISCVParser.FREG);
				}
				break;
			case RISCVParser.I_FNMSUBD:
				_localctx = new FNMSUBDContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1175;
				this.match(RISCVParser.I_FNMSUBD);
				this.state = 1176;
				this.match(RISCVParser.FREG);
				this.state = 1178;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1177;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1180;
				this.match(RISCVParser.FREG);
				this.state = 1182;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1181;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1184;
				this.match(RISCVParser.FREG);
				this.state = 1186;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1185;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1188;
				this.match(RISCVParser.FREG);
				}
				break;
			case RISCVParser.I_FNMADDD:
				_localctx = new FNMADDDContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1189;
				this.match(RISCVParser.I_FNMADDD);
				this.state = 1190;
				this.match(RISCVParser.FREG);
				this.state = 1192;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1191;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1194;
				this.match(RISCVParser.FREG);
				this.state = 1196;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1195;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1198;
				this.match(RISCVParser.FREG);
				this.state = 1200;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1199;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1202;
				this.match(RISCVParser.FREG);
				}
				break;
			case RISCVParser.I_FADDD:
				_localctx = new FADDDContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1203;
				this.match(RISCVParser.I_FADDD);
				this.state = 1204;
				this.match(RISCVParser.FREG);
				this.state = 1206;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1205;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1208;
				this.match(RISCVParser.FREG);
				this.state = 1210;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1209;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1212;
				this.match(RISCVParser.FREG);
				}
				break;
			case RISCVParser.I_FSUBD:
				_localctx = new FSUBDContext(_localctx);
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 1213;
				this.match(RISCVParser.I_FSUBD);
				this.state = 1214;
				this.match(RISCVParser.FREG);
				this.state = 1216;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1215;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1218;
				this.match(RISCVParser.FREG);
				this.state = 1220;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1219;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1222;
				this.match(RISCVParser.FREG);
				}
				break;
			case RISCVParser.I_FMULD:
				_localctx = new FMULDContext(_localctx);
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 1223;
				this.match(RISCVParser.I_FMULD);
				this.state = 1224;
				this.match(RISCVParser.FREG);
				this.state = 1226;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1225;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1228;
				this.match(RISCVParser.FREG);
				this.state = 1230;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1229;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1232;
				this.match(RISCVParser.FREG);
				}
				break;
			case RISCVParser.I_FDIVD:
				_localctx = new FDIVDContext(_localctx);
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 1233;
				this.match(RISCVParser.I_FDIVD);
				this.state = 1234;
				this.match(RISCVParser.FREG);
				this.state = 1236;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1235;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1238;
				this.match(RISCVParser.FREG);
				this.state = 1240;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1239;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1242;
				this.match(RISCVParser.FREG);
				}
				break;
			case RISCVParser.I_FSQRTD:
				_localctx = new FSQRTDContext(_localctx);
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 1243;
				this.match(RISCVParser.I_FSQRTD);
				this.state = 1244;
				this.match(RISCVParser.FREG);
				this.state = 1246;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1245;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1248;
				this.match(RISCVParser.FREG);
				}
				break;
			case RISCVParser.I_FSGNJD:
				_localctx = new FSGNJDContext(_localctx);
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 1249;
				this.match(RISCVParser.I_FSGNJD);
				this.state = 1250;
				this.match(RISCVParser.FREG);
				this.state = 1252;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1251;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1254;
				this.match(RISCVParser.FREG);
				this.state = 1256;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1255;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1258;
				this.match(RISCVParser.FREG);
				}
				break;
			case RISCVParser.I_FSGNJND:
				_localctx = new FSGNJNDContext(_localctx);
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 1259;
				this.match(RISCVParser.I_FSGNJND);
				this.state = 1260;
				this.match(RISCVParser.FREG);
				this.state = 1262;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1261;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1264;
				this.match(RISCVParser.FREG);
				this.state = 1266;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1265;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1268;
				this.match(RISCVParser.FREG);
				}
				break;
			case RISCVParser.I_FSGNJXD:
				_localctx = new FSGNJXDContext(_localctx);
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 1269;
				this.match(RISCVParser.I_FSGNJXD);
				this.state = 1270;
				this.match(RISCVParser.FREG);
				this.state = 1272;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1271;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1274;
				this.match(RISCVParser.FREG);
				this.state = 1276;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1275;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1278;
				this.match(RISCVParser.FREG);
				}
				break;
			case RISCVParser.I_FMIND:
				_localctx = new FMINDContext(_localctx);
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 1279;
				this.match(RISCVParser.I_FMIND);
				this.state = 1280;
				this.match(RISCVParser.FREG);
				this.state = 1282;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1281;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1284;
				this.match(RISCVParser.FREG);
				this.state = 1286;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1285;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1288;
				this.match(RISCVParser.FREG);
				}
				break;
			case RISCVParser.I_FMAXD:
				_localctx = new FMAXDContext(_localctx);
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 1289;
				this.match(RISCVParser.I_FMAXD);
				this.state = 1290;
				this.match(RISCVParser.FREG);
				this.state = 1292;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1291;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1294;
				this.match(RISCVParser.FREG);
				this.state = 1296;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1295;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1298;
				this.match(RISCVParser.FREG);
				}
				break;
			case RISCVParser.I_FCVTSD:
				_localctx = new FCVTSDContext(_localctx);
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 1299;
				this.match(RISCVParser.I_FCVTSD);
				this.state = 1300;
				this.match(RISCVParser.FREG);
				this.state = 1302;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1301;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1304;
				this.match(RISCVParser.FREG);
				}
				break;
			case RISCVParser.I_FCVTDS:
				_localctx = new FCVTDSContext(_localctx);
				this.enterOuterAlt(_localctx, 18);
				{
				this.state = 1305;
				this.match(RISCVParser.I_FCVTDS);
				this.state = 1306;
				this.match(RISCVParser.FREG);
				this.state = 1308;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1307;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1310;
				this.match(RISCVParser.FREG);
				}
				break;
			case RISCVParser.I_FEQD:
				_localctx = new FEQDContext(_localctx);
				this.enterOuterAlt(_localctx, 19);
				{
				this.state = 1311;
				this.match(RISCVParser.I_FEQD);
				this.state = 1312;
				this.match(RISCVParser.XREG);
				this.state = 1314;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1313;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1316;
				this.match(RISCVParser.FREG);
				this.state = 1318;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1317;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1320;
				this.match(RISCVParser.FREG);
				}
				break;
			case RISCVParser.I_FLTD:
				_localctx = new FLTDContext(_localctx);
				this.enterOuterAlt(_localctx, 20);
				{
				this.state = 1321;
				this.match(RISCVParser.I_FLTD);
				this.state = 1322;
				this.match(RISCVParser.XREG);
				this.state = 1324;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1323;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1326;
				this.match(RISCVParser.FREG);
				this.state = 1328;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1327;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1330;
				this.match(RISCVParser.FREG);
				}
				break;
			case RISCVParser.I_FLED:
				_localctx = new FLEDContext(_localctx);
				this.enterOuterAlt(_localctx, 21);
				{
				this.state = 1331;
				this.match(RISCVParser.I_FLED);
				this.state = 1332;
				this.match(RISCVParser.XREG);
				this.state = 1334;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1333;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1336;
				this.match(RISCVParser.FREG);
				this.state = 1338;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1337;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1340;
				this.match(RISCVParser.FREG);
				}
				break;
			case RISCVParser.I_FCLASSD:
				_localctx = new FCLASSDContext(_localctx);
				this.enterOuterAlt(_localctx, 22);
				{
				this.state = 1341;
				this.match(RISCVParser.I_FCLASSD);
				this.state = 1342;
				this.match(RISCVParser.XREG);
				this.state = 1344;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1343;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1346;
				this.match(RISCVParser.FREG);
				}
				break;
			case RISCVParser.I_FCVTWD:
				_localctx = new FCVTWDContext(_localctx);
				this.enterOuterAlt(_localctx, 23);
				{
				this.state = 1347;
				this.match(RISCVParser.I_FCVTWD);
				this.state = 1348;
				this.match(RISCVParser.XREG);
				this.state = 1350;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1349;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1352;
				this.match(RISCVParser.FREG);
				}
				break;
			case RISCVParser.I_FCVTWUD:
				_localctx = new FCVTWUDContext(_localctx);
				this.enterOuterAlt(_localctx, 24);
				{
				this.state = 1353;
				this.match(RISCVParser.I_FCVTWUD);
				this.state = 1354;
				this.match(RISCVParser.XREG);
				this.state = 1356;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1355;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1358;
				this.match(RISCVParser.FREG);
				}
				break;
			case RISCVParser.I_FCVTDW:
				_localctx = new FCVTDWContext(_localctx);
				this.enterOuterAlt(_localctx, 25);
				{
				this.state = 1359;
				this.match(RISCVParser.I_FCVTDW);
				this.state = 1360;
				this.match(RISCVParser.FREG);
				this.state = 1362;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1361;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1364;
				this.match(RISCVParser.XREG);
				}
				break;
			case RISCVParser.I_FCVTDWU:
				_localctx = new FCVTDWUContext(_localctx);
				this.enterOuterAlt(_localctx, 26);
				{
				this.state = 1365;
				this.match(RISCVParser.I_FCVTDWU);
				this.state = 1366;
				this.match(RISCVParser.FREG);
				this.state = 1368;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1367;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1370;
				this.match(RISCVParser.XREG);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public rv32i_ext_pseudos(): Rv32i_ext_pseudosContext {
		let _localctx: Rv32i_ext_pseudosContext = new Rv32i_ext_pseudosContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, RISCVParser.RULE_rv32i_ext_pseudos);
		let _la: number;
		try {
			this.state = 1577;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case RISCVParser.I_LA:
				_localctx = new LAPSEUDOContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1373;
				this.match(RISCVParser.I_LA);
				this.state = 1374;
				this.match(RISCVParser.XREG);
				this.state = 1376;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1375;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1378;
				this.match(RISCVParser.ID);
				}
				break;
			case RISCVParser.I_LLA:
				_localctx = new LLAPSEUDOContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1379;
				this.match(RISCVParser.I_LLA);
				this.state = 1380;
				this.match(RISCVParser.XREG);
				this.state = 1382;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1381;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1384;
				this.match(RISCVParser.ID);
				}
				break;
			case RISCVParser.I_LB:
				_localctx = new LBPSEUDOContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1385;
				this.match(RISCVParser.I_LB);
				this.state = 1386;
				this.match(RISCVParser.XREG);
				this.state = 1388;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1387;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1390;
				this.match(RISCVParser.ID);
				}
				break;
			case RISCVParser.I_LH:
				_localctx = new LHPSEUDOContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1391;
				this.match(RISCVParser.I_LH);
				this.state = 1392;
				this.match(RISCVParser.XREG);
				this.state = 1394;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1393;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1396;
				this.match(RISCVParser.ID);
				}
				break;
			case RISCVParser.I_LW:
				_localctx = new LWPSEUDOContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1397;
				this.match(RISCVParser.I_LW);
				this.state = 1398;
				this.match(RISCVParser.XREG);
				this.state = 1400;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1399;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1402;
				this.match(RISCVParser.ID);
				}
				break;
			case RISCVParser.I_SB:
				_localctx = new SBPSEUDOContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1403;
				this.match(RISCVParser.I_SB);
				this.state = 1404;
				this.match(RISCVParser.XREG);
				this.state = 1406;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1405;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1408;
				this.match(RISCVParser.ID);
				this.state = 1410;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1409;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1412;
				this.match(RISCVParser.XREG);
				}
				break;
			case RISCVParser.I_SH:
				_localctx = new SHPSEUDOContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1413;
				this.match(RISCVParser.I_SH);
				this.state = 1414;
				this.match(RISCVParser.XREG);
				this.state = 1416;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1415;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1418;
				this.match(RISCVParser.ID);
				this.state = 1420;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1419;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1422;
				this.match(RISCVParser.XREG);
				}
				break;
			case RISCVParser.I_SW:
				_localctx = new SWPSEUDOContext(_localctx);
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 1423;
				this.match(RISCVParser.I_SW);
				this.state = 1424;
				this.match(RISCVParser.XREG);
				this.state = 1426;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1425;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1428;
				this.match(RISCVParser.ID);
				this.state = 1430;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1429;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1432;
				this.match(RISCVParser.XREG);
				}
				break;
			case RISCVParser.I_NOP:
				_localctx = new NOPPSEUDOContext(_localctx);
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 1433;
				this.match(RISCVParser.I_NOP);
				}
				break;
			case RISCVParser.I_LI:
				_localctx = new LIPSEUDOContext(_localctx);
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 1434;
				this.match(RISCVParser.I_LI);
				this.state = 1435;
				this.match(RISCVParser.XREG);
				this.state = 1437;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1436;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1439;
				this.expr(0);
				}
				break;
			case RISCVParser.I_MV:
				_localctx = new MVPSEUDOContext(_localctx);
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 1440;
				this.match(RISCVParser.I_MV);
				this.state = 1441;
				this.match(RISCVParser.XREG);
				this.state = 1443;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1442;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1445;
				this.match(RISCVParser.XREG);
				}
				break;
			case RISCVParser.I_NOT:
				_localctx = new NOTPSEUDOContext(_localctx);
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 1446;
				this.match(RISCVParser.I_NOT);
				this.state = 1447;
				this.match(RISCVParser.XREG);
				this.state = 1449;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1448;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1451;
				this.match(RISCVParser.XREG);
				}
				break;
			case RISCVParser.I_NEG:
				_localctx = new NEGPSEUDOContext(_localctx);
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 1452;
				this.match(RISCVParser.I_NEG);
				this.state = 1453;
				this.match(RISCVParser.XREG);
				this.state = 1455;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1454;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1457;
				this.match(RISCVParser.XREG);
				}
				break;
			case RISCVParser.I_SEQZ:
				_localctx = new SEQZPSEUDOContext(_localctx);
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 1458;
				this.match(RISCVParser.I_SEQZ);
				this.state = 1459;
				this.match(RISCVParser.XREG);
				this.state = 1461;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1460;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1463;
				this.match(RISCVParser.XREG);
				}
				break;
			case RISCVParser.I_SNEZ:
				_localctx = new SNEZPSEUDOContext(_localctx);
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 1464;
				this.match(RISCVParser.I_SNEZ);
				this.state = 1465;
				this.match(RISCVParser.XREG);
				this.state = 1467;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1466;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1469;
				this.match(RISCVParser.XREG);
				}
				break;
			case RISCVParser.I_SLTZ:
				_localctx = new SLTZPSEUDOContext(_localctx);
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 1470;
				this.match(RISCVParser.I_SLTZ);
				this.state = 1471;
				this.match(RISCVParser.XREG);
				this.state = 1473;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1472;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1475;
				this.match(RISCVParser.XREG);
				}
				break;
			case RISCVParser.I_SGTZ:
				_localctx = new SGTZPSEUDOContext(_localctx);
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 1476;
				this.match(RISCVParser.I_SGTZ);
				this.state = 1477;
				this.match(RISCVParser.XREG);
				this.state = 1479;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1478;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1481;
				this.match(RISCVParser.XREG);
				}
				break;
			case RISCVParser.I_BEQZ:
				_localctx = new BEQZPSEUDOContext(_localctx);
				this.enterOuterAlt(_localctx, 18);
				{
				this.state = 1482;
				this.match(RISCVParser.I_BEQZ);
				this.state = 1483;
				this.match(RISCVParser.XREG);
				this.state = 1485;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1484;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1487;
				this.match(RISCVParser.ID);
				}
				break;
			case RISCVParser.I_BNEZ:
				_localctx = new BNEZPSEUDOContext(_localctx);
				this.enterOuterAlt(_localctx, 19);
				{
				this.state = 1488;
				this.match(RISCVParser.I_BNEZ);
				this.state = 1489;
				this.match(RISCVParser.XREG);
				this.state = 1491;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1490;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1493;
				this.match(RISCVParser.ID);
				}
				break;
			case RISCVParser.I_BLEZ:
				_localctx = new BLEZPSEUDOContext(_localctx);
				this.enterOuterAlt(_localctx, 20);
				{
				this.state = 1494;
				this.match(RISCVParser.I_BLEZ);
				this.state = 1495;
				this.match(RISCVParser.XREG);
				this.state = 1497;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1496;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1499;
				this.match(RISCVParser.ID);
				}
				break;
			case RISCVParser.I_BGEZ:
				_localctx = new BGEZPSEUDOContext(_localctx);
				this.enterOuterAlt(_localctx, 21);
				{
				this.state = 1500;
				this.match(RISCVParser.I_BGEZ);
				this.state = 1501;
				this.match(RISCVParser.XREG);
				this.state = 1503;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1502;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1505;
				this.match(RISCVParser.ID);
				}
				break;
			case RISCVParser.I_BLTZ:
				_localctx = new BLTZPSEUDOContext(_localctx);
				this.enterOuterAlt(_localctx, 22);
				{
				this.state = 1506;
				this.match(RISCVParser.I_BLTZ);
				this.state = 1507;
				this.match(RISCVParser.XREG);
				this.state = 1509;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1508;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1511;
				this.match(RISCVParser.ID);
				}
				break;
			case RISCVParser.I_BGTZ:
				_localctx = new BGTZPSEUDOContext(_localctx);
				this.enterOuterAlt(_localctx, 23);
				{
				this.state = 1512;
				this.match(RISCVParser.I_BGTZ);
				this.state = 1513;
				this.match(RISCVParser.XREG);
				this.state = 1515;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1514;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1517;
				this.match(RISCVParser.ID);
				}
				break;
			case RISCVParser.I_BGT:
				_localctx = new BGTPSEUDOContext(_localctx);
				this.enterOuterAlt(_localctx, 24);
				{
				this.state = 1518;
				this.match(RISCVParser.I_BGT);
				this.state = 1519;
				this.match(RISCVParser.XREG);
				this.state = 1521;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1520;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1523;
				this.match(RISCVParser.XREG);
				this.state = 1525;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1524;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1527;
				this.match(RISCVParser.ID);
				}
				break;
			case RISCVParser.I_BLE:
				_localctx = new BLEPSEUDOContext(_localctx);
				this.enterOuterAlt(_localctx, 25);
				{
				this.state = 1528;
				this.match(RISCVParser.I_BLE);
				this.state = 1529;
				this.match(RISCVParser.XREG);
				this.state = 1531;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1530;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1533;
				this.match(RISCVParser.XREG);
				this.state = 1535;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1534;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1537;
				this.match(RISCVParser.ID);
				}
				break;
			case RISCVParser.I_BGTU:
				_localctx = new BGTUPSEUDOContext(_localctx);
				this.enterOuterAlt(_localctx, 26);
				{
				this.state = 1538;
				this.match(RISCVParser.I_BGTU);
				this.state = 1539;
				this.match(RISCVParser.XREG);
				this.state = 1541;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1540;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1543;
				this.match(RISCVParser.XREG);
				this.state = 1545;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1544;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1547;
				this.match(RISCVParser.ID);
				}
				break;
			case RISCVParser.I_BLEU:
				_localctx = new BLEUPSEUDOContext(_localctx);
				this.enterOuterAlt(_localctx, 27);
				{
				this.state = 1548;
				this.match(RISCVParser.I_BLEU);
				this.state = 1549;
				this.match(RISCVParser.XREG);
				this.state = 1551;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1550;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1553;
				this.match(RISCVParser.XREG);
				this.state = 1555;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1554;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1557;
				this.match(RISCVParser.ID);
				}
				break;
			case RISCVParser.I_J:
				_localctx = new JPSEUDOContext(_localctx);
				this.enterOuterAlt(_localctx, 28);
				{
				this.state = 1558;
				this.match(RISCVParser.I_J);
				this.state = 1559;
				this.match(RISCVParser.ID);
				}
				break;
			case RISCVParser.I_JAL:
				_localctx = new JALPSEUDOContext(_localctx);
				this.enterOuterAlt(_localctx, 29);
				{
				this.state = 1560;
				this.match(RISCVParser.I_JAL);
				this.state = 1561;
				this.match(RISCVParser.ID);
				}
				break;
			case RISCVParser.I_JR:
				_localctx = new JRPSEUDOContext(_localctx);
				this.enterOuterAlt(_localctx, 30);
				{
				this.state = 1562;
				this.match(RISCVParser.I_JR);
				this.state = 1563;
				this.match(RISCVParser.XREG);
				}
				break;
			case RISCVParser.I_JALR:
				_localctx = new JALRPSEUDOContext(_localctx);
				this.enterOuterAlt(_localctx, 31);
				{
				this.state = 1564;
				this.match(RISCVParser.I_JALR);
				this.state = 1565;
				this.match(RISCVParser.XREG);
				}
				break;
			case RISCVParser.I_RET:
				_localctx = new RETPSEUDOContext(_localctx);
				this.enterOuterAlt(_localctx, 32);
				{
				this.state = 1566;
				this.match(RISCVParser.I_RET);
				}
				break;
			case RISCVParser.I_CALL:
				_localctx = new CALLPSEUDOContext(_localctx);
				this.enterOuterAlt(_localctx, 33);
				{
				this.state = 1567;
				this.match(RISCVParser.I_CALL);
				this.state = 1569;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1568;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1571;
				this.match(RISCVParser.ID);
				}
				break;
			case RISCVParser.I_TAIL:
				_localctx = new TAILPSEUDOContext(_localctx);
				this.enterOuterAlt(_localctx, 34);
				{
				this.state = 1572;
				this.match(RISCVParser.I_TAIL);
				this.state = 1574;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1573;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1576;
				this.match(RISCVParser.ID);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public rv32zicsr_ext_pseudos(): Rv32zicsr_ext_pseudosContext {
		let _localctx: Rv32zicsr_ext_pseudosContext = new Rv32zicsr_ext_pseudosContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, RISCVParser.RULE_rv32zicsr_ext_pseudos);
		let _la: number;
		try {
			this.state = 1663;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 311, this._ctx) ) {
			case 1:
				_localctx = new RDINSTRETPSEUDOContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1579;
				this.match(RISCVParser.I_RDINSTRET);
				this.state = 1580;
				this.match(RISCVParser.XREG);
				}
				break;

			case 2:
				_localctx = new RDCYCLEPSEUDOContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1581;
				this.match(RISCVParser.I_RDCYCLE);
				this.state = 1582;
				this.match(RISCVParser.XREG);
				}
				break;

			case 3:
				_localctx = new RDTIMEPSEUDOContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1583;
				this.match(RISCVParser.I_RDTIME);
				this.state = 1584;
				this.match(RISCVParser.XREG);
				}
				break;

			case 4:
				_localctx = new CSRRPSEUDOContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1585;
				this.match(RISCVParser.I_CSRR);
				this.state = 1586;
				this.match(RISCVParser.XREG);
				this.state = 1588;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1587;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1590;
				this.expr(0);
				}
				break;

			case 5:
				_localctx = new CSRWPSEUDOContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1591;
				this.match(RISCVParser.I_CSRW);
				this.state = 1592;
				this.expr(0);
				this.state = 1594;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1593;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1596;
				this.match(RISCVParser.XREG);
				}
				break;

			case 6:
				_localctx = new CSRSPSEUDOContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1598;
				this.match(RISCVParser.I_CSRS);
				this.state = 1599;
				this.expr(0);
				this.state = 1601;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1600;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1603;
				this.match(RISCVParser.XREG);
				}
				break;

			case 7:
				_localctx = new CSRCPSEUDOContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1605;
				this.match(RISCVParser.I_CSRC);
				this.state = 1606;
				this.expr(0);
				this.state = 1608;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1607;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1610;
				this.match(RISCVParser.XREG);
				}
				break;

			case 8:
				_localctx = new CSRWIPSEUDOContext(_localctx);
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 1612;
				this.match(RISCVParser.I_CSRWI);
				this.state = 1613;
				this.expr(0);
				this.state = 1615;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1614;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1617;
				this.match(RISCVParser.INT);
				}
				break;

			case 9:
				_localctx = new CSRSIPSEUDOContext(_localctx);
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 1619;
				this.match(RISCVParser.I_CSRSI);
				this.state = 1620;
				this.expr(0);
				this.state = 1622;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1621;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1624;
				this.match(RISCVParser.INT);
				}
				break;

			case 10:
				_localctx = new CSRCIPSEUDOContext(_localctx);
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 1626;
				this.match(RISCVParser.I_CSRCI);
				this.state = 1627;
				this.expr(0);
				this.state = 1629;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1628;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1631;
				this.match(RISCVParser.INT);
				}
				break;

			case 11:
				_localctx = new FRCSRPSEUDOContext(_localctx);
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 1633;
				this.match(RISCVParser.I_FRCSR);
				this.state = 1634;
				this.match(RISCVParser.XREG);
				}
				break;

			case 12:
				_localctx = new FSCSRPSEUDOContext(_localctx);
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 1635;
				this.match(RISCVParser.I_FSCSR);
				this.state = 1636;
				this.match(RISCVParser.XREG);
				}
				break;

			case 13:
				_localctx = new FSCSR2PSEUDOContext(_localctx);
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 1637;
				this.match(RISCVParser.I_FSCSR);
				this.state = 1638;
				this.match(RISCVParser.XREG);
				this.state = 1640;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1639;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1642;
				this.match(RISCVParser.XREG);
				}
				break;

			case 14:
				_localctx = new FRRMPSEUDOContext(_localctx);
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 1643;
				this.match(RISCVParser.I_FRRM);
				this.state = 1644;
				this.match(RISCVParser.XREG);
				}
				break;

			case 15:
				_localctx = new FSRMPSEUDOContext(_localctx);
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 1645;
				this.match(RISCVParser.I_FSRM);
				this.state = 1646;
				this.match(RISCVParser.XREG);
				}
				break;

			case 16:
				_localctx = new FSRM2PSEUDOContext(_localctx);
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 1647;
				this.match(RISCVParser.I_FSRM);
				this.state = 1648;
				this.match(RISCVParser.XREG);
				this.state = 1650;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1649;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1652;
				this.match(RISCVParser.XREG);
				}
				break;

			case 17:
				_localctx = new FRFLAGSPSEUDOContext(_localctx);
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 1653;
				this.match(RISCVParser.I_FRFLAGS);
				this.state = 1654;
				this.match(RISCVParser.XREG);
				}
				break;

			case 18:
				_localctx = new FSFLAGSPSEUDOContext(_localctx);
				this.enterOuterAlt(_localctx, 18);
				{
				this.state = 1655;
				this.match(RISCVParser.I_FSFLAGS);
				this.state = 1656;
				this.match(RISCVParser.XREG);
				}
				break;

			case 19:
				_localctx = new FSFLAGS2PSEUDOContext(_localctx);
				this.enterOuterAlt(_localctx, 19);
				{
				this.state = 1657;
				this.match(RISCVParser.I_FSFLAGS);
				this.state = 1658;
				this.match(RISCVParser.XREG);
				this.state = 1660;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1659;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1662;
				this.match(RISCVParser.XREG);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public rv32f_ext_pseudos(): Rv32f_ext_pseudosContext {
		let _localctx: Rv32f_ext_pseudosContext = new Rv32f_ext_pseudosContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, RISCVParser.RULE_rv32f_ext_pseudos);
		let _la: number;
		try {
			this.state = 1703;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case RISCVParser.I_FLW:
				_localctx = new FLWPSEUDOContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1665;
				this.match(RISCVParser.I_FLW);
				this.state = 1666;
				this.match(RISCVParser.FREG);
				this.state = 1668;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1667;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1670;
				this.match(RISCVParser.ID);
				this.state = 1672;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1671;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1674;
				this.match(RISCVParser.XREG);
				}
				break;
			case RISCVParser.I_FSW:
				_localctx = new FSWPSEUDOContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1675;
				this.match(RISCVParser.I_FSW);
				this.state = 1676;
				this.match(RISCVParser.FREG);
				this.state = 1678;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1677;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1680;
				this.match(RISCVParser.ID);
				this.state = 1682;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1681;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1684;
				this.match(RISCVParser.XREG);
				}
				break;
			case RISCVParser.I_FMVS:
				_localctx = new FMVSPSEUDOContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1685;
				this.match(RISCVParser.I_FMVS);
				this.state = 1686;
				this.match(RISCVParser.FREG);
				this.state = 1688;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1687;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1690;
				this.match(RISCVParser.FREG);
				}
				break;
			case RISCVParser.I_FABSS:
				_localctx = new FABSSPSEUDOContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1691;
				this.match(RISCVParser.I_FABSS);
				this.state = 1692;
				this.match(RISCVParser.FREG);
				this.state = 1694;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1693;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1696;
				this.match(RISCVParser.FREG);
				}
				break;
			case RISCVParser.I_FNEGS:
				_localctx = new FNEGSPSEUDOContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1697;
				this.match(RISCVParser.I_FNEGS);
				this.state = 1698;
				this.match(RISCVParser.FREG);
				this.state = 1700;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1699;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1702;
				this.match(RISCVParser.FREG);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public rv32d_ext_pseudos(): Rv32d_ext_pseudosContext {
		let _localctx: Rv32d_ext_pseudosContext = new Rv32d_ext_pseudosContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, RISCVParser.RULE_rv32d_ext_pseudos);
		let _la: number;
		try {
			this.state = 1743;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case RISCVParser.I_FLD:
				_localctx = new FLDPSEUDOContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1705;
				this.match(RISCVParser.I_FLD);
				this.state = 1706;
				this.match(RISCVParser.FREG);
				this.state = 1708;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1707;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1710;
				this.match(RISCVParser.ID);
				this.state = 1712;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1711;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1714;
				this.match(RISCVParser.XREG);
				}
				break;
			case RISCVParser.I_FSD:
				_localctx = new FSDPSEUDOContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1715;
				this.match(RISCVParser.I_FSD);
				this.state = 1716;
				this.match(RISCVParser.FREG);
				this.state = 1718;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1717;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1720;
				this.match(RISCVParser.ID);
				this.state = 1722;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1721;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1724;
				this.match(RISCVParser.XREG);
				}
				break;
			case RISCVParser.I_FMVD:
				_localctx = new FMVDPSEUDOContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1725;
				this.match(RISCVParser.I_FMVD);
				this.state = 1726;
				this.match(RISCVParser.FREG);
				this.state = 1728;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1727;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1730;
				this.match(RISCVParser.FREG);
				}
				break;
			case RISCVParser.I_FABSD:
				_localctx = new FABSDPSEUDOContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1731;
				this.match(RISCVParser.I_FABSD);
				this.state = 1732;
				this.match(RISCVParser.FREG);
				this.state = 1734;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1733;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1736;
				this.match(RISCVParser.FREG);
				}
				break;
			case RISCVParser.I_FNEGD:
				_localctx = new FNEGDPSEUDOContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1737;
				this.match(RISCVParser.I_FNEGD);
				this.state = 1738;
				this.match(RISCVParser.FREG);
				this.state = 1740;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1739;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1742;
				this.match(RISCVParser.FREG);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public static_data(): Static_dataContext {
		let _localctx: Static_dataContext = new Static_dataContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, RISCVParser.RULE_static_data);
		let _la: number;
		try {
			this.state = 1795;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case RISCVParser.D_BYTE:
				_localctx = new BYTEContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1745;
				this.match(RISCVParser.D_BYTE);
				this.state = 1746;
				this.expr(0);
				this.state = 1753;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << RISCVParser.T__0) | (1 << RISCVParser.T__1) | (1 << RISCVParser.T__4) | (1 << RISCVParser.T__5) | (1 << RISCVParser.T__6) | (1 << RISCVParser.T__7))) !== 0) || ((((_la - 196)) & ~0x1F) === 0 && ((1 << (_la - 196)) & ((1 << (RISCVParser.INT - 196)) | (1 << (RISCVParser.SIGN - 196)) | (1 << (RISCVParser.ID - 196)))) !== 0)) {
					{
					{
					this.state = 1748;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === RISCVParser.T__0) {
						{
						this.state = 1747;
						this.match(RISCVParser.T__0);
						}
					}

					this.state = 1750;
					this.expr(0);
					}
					}
					this.state = 1755;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			case RISCVParser.D_HALF:
				_localctx = new HALFContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1756;
				this.match(RISCVParser.D_HALF);
				this.state = 1757;
				this.expr(0);
				this.state = 1764;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << RISCVParser.T__0) | (1 << RISCVParser.T__1) | (1 << RISCVParser.T__4) | (1 << RISCVParser.T__5) | (1 << RISCVParser.T__6) | (1 << RISCVParser.T__7))) !== 0) || ((((_la - 196)) & ~0x1F) === 0 && ((1 << (_la - 196)) & ((1 << (RISCVParser.INT - 196)) | (1 << (RISCVParser.SIGN - 196)) | (1 << (RISCVParser.ID - 196)))) !== 0)) {
					{
					{
					this.state = 1759;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === RISCVParser.T__0) {
						{
						this.state = 1758;
						this.match(RISCVParser.T__0);
						}
					}

					this.state = 1761;
					this.expr(0);
					}
					}
					this.state = 1766;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			case RISCVParser.D_WORD:
				_localctx = new WORDContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1767;
				this.match(RISCVParser.D_WORD);
				this.state = 1768;
				this.expr(0);
				this.state = 1775;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << RISCVParser.T__0) | (1 << RISCVParser.T__1) | (1 << RISCVParser.T__4) | (1 << RISCVParser.T__5) | (1 << RISCVParser.T__6) | (1 << RISCVParser.T__7))) !== 0) || ((((_la - 196)) & ~0x1F) === 0 && ((1 << (_la - 196)) & ((1 << (RISCVParser.INT - 196)) | (1 << (RISCVParser.SIGN - 196)) | (1 << (RISCVParser.ID - 196)))) !== 0)) {
					{
					{
					this.state = 1770;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === RISCVParser.T__0) {
						{
						this.state = 1769;
						this.match(RISCVParser.T__0);
						}
					}

					this.state = 1772;
					this.expr(0);
					}
					}
					this.state = 1777;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			case RISCVParser.D_FLOAT:
				_localctx = new FLOATContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1778;
				this.match(RISCVParser.D_FLOAT);
				this.state = 1779;
				this.fexpr();
				this.state = 1786;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << RISCVParser.T__0) | (1 << RISCVParser.T__1) | (1 << RISCVParser.T__4) | (1 << RISCVParser.T__5) | (1 << RISCVParser.T__6) | (1 << RISCVParser.T__7))) !== 0) || ((((_la - 195)) & ~0x1F) === 0 && ((1 << (_la - 195)) & ((1 << (RISCVParser.FLOAT - 195)) | (1 << (RISCVParser.INT - 195)) | (1 << (RISCVParser.SIGN - 195)) | (1 << (RISCVParser.ID - 195)))) !== 0)) {
					{
					{
					this.state = 1781;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === RISCVParser.T__0) {
						{
						this.state = 1780;
						this.match(RISCVParser.T__0);
						}
					}

					this.state = 1783;
					this.fexpr();
					}
					}
					this.state = 1788;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			case RISCVParser.D_ASCII:
				_localctx = new ASCIIContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1789;
				this.match(RISCVParser.D_ASCII);
				this.state = 1790;
				this.match(RISCVParser.STRING);
				}
				break;
			case RISCVParser.D_STRING:
				_localctx = new ASCIIZContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1791;
				this.match(RISCVParser.D_STRING);
				this.state = 1792;
				this.match(RISCVParser.STRING);
				}
				break;
			case RISCVParser.D_ZERO:
				_localctx = new ZEROContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1793;
				this.match(RISCVParser.D_ZERO);
				this.state = 1794;
				this.match(RISCVParser.INT);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public directive(): DirectiveContext {
		let _localctx: DirectiveContext = new DirectiveContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, RISCVParser.RULE_directive);
		let _la: number;
		try {
			this.state = 1836;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 344, this._ctx) ) {
			case 1:
				_localctx = new BSSContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1798;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__3) {
					{
					this.state = 1797;
					this.match(RISCVParser.T__3);
					}
				}

				this.state = 1800;
				this.match(RISCVParser.D_BSS);
				}
				break;

			case 2:
				_localctx = new DATAContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1802;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__3) {
					{
					this.state = 1801;
					this.match(RISCVParser.T__3);
					}
				}

				this.state = 1804;
				this.match(RISCVParser.D_DATA);
				}
				break;

			case 3:
				_localctx = new RODATAContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1806;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__3) {
					{
					this.state = 1805;
					this.match(RISCVParser.T__3);
					}
				}

				this.state = 1808;
				this.match(RISCVParser.D_RODATA);
				}
				break;

			case 4:
				_localctx = new TEXTContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1810;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__3) {
					{
					this.state = 1809;
					this.match(RISCVParser.T__3);
					}
				}

				this.state = 1812;
				this.match(RISCVParser.D_TEXT);
				}
				break;

			case 5:
				_localctx = new GLOBLContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1813;
				this.match(RISCVParser.D_GLOBL);
				this.state = 1814;
				this.match(RISCVParser.ID);
				this.state = 1821;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === RISCVParser.T__0 || _la === RISCVParser.ID) {
					{
					{
					this.state = 1816;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === RISCVParser.T__0) {
						{
						this.state = 1815;
						this.match(RISCVParser.T__0);
						}
					}

					this.state = 1818;
					this.match(RISCVParser.ID);
					}
					}
					this.state = 1823;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;

			case 6:
				_localctx = new ALIGNContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1824;
				this.match(RISCVParser.D_ALIGN);
				this.state = 1825;
				this.match(RISCVParser.INT);
				}
				break;

			case 7:
				_localctx = new BALIGNContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1826;
				this.match(RISCVParser.D_BALIGN);
				this.state = 1827;
				this.match(RISCVParser.INT);
				}
				break;

			case 8:
				_localctx = new FILEContext(_localctx);
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 1828;
				this.match(RISCVParser.D_FILE);
				this.state = 1829;
				this.match(RISCVParser.STRING);
				}
				break;

			case 9:
				_localctx = new EQUContext(_localctx);
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 1830;
				this.match(RISCVParser.D_EQU);
				this.state = 1831;
				this.match(RISCVParser.ID);
				this.state = 1833;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RISCVParser.T__0) {
					{
					this.state = 1832;
					this.match(RISCVParser.T__0);
					}
				}

				this.state = 1835;
				this.expr(0);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public expr(): ExprContext;
	public expr(_p: number): ExprContext;
	// @RuleVersion(0)
	public expr(_p?: number): ExprContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ExprContext = new ExprContext(this._ctx, _parentState);
		let _prevctx: ExprContext = _localctx;
		let _startState: number = 36;
		this.enterRecursionRule(_localctx, 36, RISCVParser.RULE_expr, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1863;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case RISCVParser.T__1:
				{
				_localctx = new PARENEXPRContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 1839;
				this.match(RISCVParser.T__1);
				this.state = 1840;
				this.expr(0);
				this.state = 1841;
				this.match(RISCVParser.T__2);
				}
				break;
			case RISCVParser.SIGN:
				{
				_localctx = new UNARYEXPRContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1843;
				this.match(RISCVParser.SIGN);
				this.state = 1844;
				this.expr(8);
				}
				break;
			case RISCVParser.INT:
				{
				_localctx = new INTEXPRContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1845;
				this.match(RISCVParser.INT);
				}
				break;
			case RISCVParser.ID:
				{
				_localctx = new IDEXPRContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1846;
				this.match(RISCVParser.ID);
				}
				break;
			case RISCVParser.T__4:
				{
				_localctx = new HIRELEXPRContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1847;
				this.match(RISCVParser.T__4);
				this.state = 1848;
				this.match(RISCVParser.T__1);
				this.state = 1849;
				this.match(RISCVParser.ID);
				this.state = 1850;
				this.match(RISCVParser.T__2);
				}
				break;
			case RISCVParser.T__5:
				{
				_localctx = new LORELEXPRContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1851;
				this.match(RISCVParser.T__5);
				this.state = 1852;
				this.match(RISCVParser.T__1);
				this.state = 1853;
				this.match(RISCVParser.ID);
				this.state = 1854;
				this.match(RISCVParser.T__2);
				}
				break;
			case RISCVParser.T__6:
				{
				_localctx = new PCRELHIRELEXPRContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1855;
				this.match(RISCVParser.T__6);
				this.state = 1856;
				this.match(RISCVParser.T__1);
				this.state = 1857;
				this.match(RISCVParser.ID);
				this.state = 1858;
				this.match(RISCVParser.T__2);
				}
				break;
			case RISCVParser.T__7:
				{
				_localctx = new PCRELLORELEXPRContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1859;
				this.match(RISCVParser.T__7);
				this.state = 1860;
				this.match(RISCVParser.T__1);
				this.state = 1861;
				this.match(RISCVParser.ID);
				this.state = 1862;
				this.match(RISCVParser.T__2);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 1870;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 346, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new PLUSEXPRContext(new ExprContext(_parentctx, _parentState));
					this.pushNewRecursionContext(_localctx, _startState, RISCVParser.RULE_expr);
					this.state = 1865;
					if (!(this.precpred(this._ctx, 7))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 7)");
					}
					this.state = 1866;
					this.match(RISCVParser.SIGN);
					this.state = 1867;
					this.expr(8);
					}
					}
				}
				this.state = 1872;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 346, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fexpr(): FexprContext {
		let _localctx: FexprContext = new FexprContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, RISCVParser.RULE_fexpr);
		try {
			this.state = 1885;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 347, this._ctx) ) {
			case 1:
				_localctx = new PARENFEXPRContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1873;
				this.match(RISCVParser.T__1);
				this.state = 1874;
				this.fexpr();
				this.state = 1875;
				this.match(RISCVParser.T__2);
				}
				break;

			case 2:
				_localctx = new UNARYFEXPRContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1877;
				this.match(RISCVParser.SIGN);
				this.state = 1878;
				this.fexpr();
				}
				break;

			case 3:
				_localctx = new PLUSFEXPRContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1879;
				this.expr(0);
				this.state = 1880;
				this.match(RISCVParser.SIGN);
				this.state = 1881;
				this.expr(0);
				}
				break;

			case 4:
				_localctx = new FLOATFEXPRContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1883;
				this.match(RISCVParser.FLOAT);
				}
				break;

			case 5:
				_localctx = new INTFEXPRContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1884;
				this.match(RISCVParser.INT);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 18:
			return this.expr_sempred(_localctx as ExprContext, predIndex);
		}
		return true;
	}
	private expr_sempred(_localctx: ExprContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 7);
		}
		return true;
	}

	private static readonly _serializedATNSegments: number = 4;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\xCD\u0762\x04" +
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
		"\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r" +
		"\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12" +
		"\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x03\x02\x07\x02,\n\x02\f\x02" +
		"\x0E\x02/\v\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03" +
		"7\n\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x05\x04C\n\x04\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06" +
		"\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06" +
		"R\n\x06\x03\x07\x03\x07\x03\x07\x05\x07W\n\x07\x03\x07\x03\x07\x03\x07" +
		"\x03\x07\x05\x07]\n\x07\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07c\n\x07" +
		"\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07i\n\x07\x03\x07\x03\x07\x05\x07" +
		"m\n\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07u\n\x07" +
		"\x03\x07\x03\x07\x03\x07\x05\x07z\n\x07\x03\x07\x03\x07\x05\x07~\n\x07" +
		"\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07\x84\n\x07\x03\x07\x03\x07\x05" +
		"\x07\x88\n\x07\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07\x8E\n\x07\x03\x07" +
		"\x03\x07\x05\x07\x92\n\x07\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07\x98" +
		"\n\x07\x03\x07\x03\x07\x05\x07\x9C\n\x07\x03\x07\x03\x07\x03\x07\x03\x07" +
		"\x05\x07\xA2\n\x07\x03\x07\x03\x07\x05\x07\xA6\n\x07\x03\x07\x03\x07\x03" +
		"\x07\x03\x07\x05\x07\xAC\n\x07\x03\x07\x03\x07\x05\x07\xB0\n\x07\x03\x07" +
		"\x03\x07\x03\x07\x03\x07\x05\x07\xB6\n\x07\x03\x07\x03\x07\x05\x07\xBA" +
		"\n\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07\xC2\n\x07" +
		"\x03\x07\x03\x07\x03\x07\x05\x07\xC7\n\x07\x03\x07\x03\x07\x05\x07\xCB" +
		"\n\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07\xD3\n\x07" +
		"\x03\x07\x03\x07\x03\x07\x05\x07\xD8\n\x07\x03\x07\x03\x07\x05\x07\xDC" +
		"\n\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07\xE4\n\x07" +
		"\x03\x07\x03\x07\x03\x07\x05\x07\xE9\n\x07\x03\x07\x03\x07\x05\x07\xED" +
		"\n\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07\xF5\n\x07" +
		"\x03\x07\x03\x07\x03\x07\x05\x07\xFA\n\x07\x03\x07\x03\x07\x05\x07\xFE" +
		"\n\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07\u0106\n" +
		"\x07\x03\x07\x03\x07\x03\x07\x05\x07\u010B\n\x07\x03\x07\x03\x07\x05\x07" +
		"\u010F\n\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07\u0117" +
		"\n\x07\x03\x07\x03\x07\x03\x07\x05\x07\u011C\n\x07\x03\x07\x03\x07\x05" +
		"\x07\u0120\n\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07" +
		"\u0128\n\x07\x03\x07\x03\x07\x03\x07\x05\x07\u012D\n\x07\x03\x07\x03\x07" +
		"\x05\x07\u0131\n\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x05" +
		"\x07\u0139\n\x07\x03\x07\x03\x07\x03\x07\x05\x07\u013E\n\x07\x03\x07\x03" +
		"\x07\x05\x07\u0142\n\x07\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07\u0148" +
		"\n\x07\x03\x07\x03\x07\x05\x07\u014C\n\x07\x03\x07\x03\x07\x03\x07\x03" +
		"\x07\x05\x07\u0152\n\x07\x03\x07\x03\x07\x05\x07\u0156\n\x07\x03\x07\x03" +
		"\x07\x03\x07\x03\x07\x05\x07\u015C\n\x07\x03\x07\x03\x07\x05\x07\u0160" +
		"\n\x07\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07\u0166\n\x07\x03\x07\x03" +
		"\x07\x05\x07\u016A\n\x07\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07\u0170" +
		"\n\x07\x03\x07\x03\x07\x05\x07\u0174\n\x07\x03\x07\x03\x07\x03\x07\x03" +
		"\x07\x05\x07\u017A\n\x07\x03\x07\x03\x07\x05\x07\u017E\n\x07\x03\x07\x03" +
		"\x07\x03\x07\x03\x07\x05\x07\u0184\n\x07\x03\x07\x03\x07\x05\x07\u0188" +
		"\n\x07\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07\u018E\n\x07\x03\x07\x03" +
		"\x07\x05\x07\u0192\n\x07\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07\u0198" +
		"\n\x07\x03\x07\x03\x07\x05\x07\u019C\n\x07\x03\x07\x03\x07\x03\x07\x03" +
		"\x07\x05\x07\u01A2\n\x07\x03\x07\x03\x07\x05\x07\u01A6\n\x07\x03\x07\x03" +
		"\x07\x03\x07\x03\x07\x05\x07\u01AC\n\x07\x03\x07\x03\x07\x05\x07\u01B0" +
		"\n\x07\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07\u01B6\n\x07\x03\x07\x03" +
		"\x07\x05\x07\u01BA\n\x07\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07\u01C0" +
		"\n\x07\x03\x07\x03\x07\x05\x07\u01C4\n\x07\x03\x07\x03\x07\x03\x07\x03" +
		"\x07\x05\x07\u01CA\n\x07\x03\x07\x03\x07\x05\x07\u01CE\n\x07\x03\x07\x03" +
		"\x07\x03\x07\x03\x07\x05\x07\u01D4\n\x07\x03\x07\x03\x07\x05\x07\u01D8" +
		"\n\x07\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07\u01DE\n\x07\x03\x07\x03" +
		"\x07\x05\x07\u01E2\n\x07\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07\u01E8" +
		"\n\x07\x03\x07\x03\x07\x05\x07\u01EC\n\x07\x03\x07\x03\x07\x03\x07\x03" +
		"\x07\x05\x07\u01F2\n\x07\x03\x07\x03\x07\x05\x07\u01F6\n\x07\x03\x07\x03" +
		"\x07\x03\x07\x03\x07\x05\x07\u01FC\n\x07\x03\b\x03\b\x03\t\x03\t\x03\t" +
		"\x05\t\u0203\n\t\x03\t\x03\t\x05\t\u0207\n\t\x03\t\x03\t\x03\t\x03\t\x03" +
		"\t\x05\t\u020E\n\t\x03\t\x03\t\x05\t\u0212\n\t\x03\t\x03\t\x03\t\x03\t" +
		"\x03\t\x05\t\u0219\n\t\x03\t\x03\t\x05\t\u021D\n\t\x03\t\x03\t\x03\t\x03" +
		"\t\x03\t\x05\t\u0224\n\t\x03\t\x03\t\x05\t\u0228\n\t\x03\t\x03\t\x03\t" +
		"\x03\t\x03\t\x05\t\u022F\n\t\x03\t\x03\t\x05\t\u0233\n\t\x03\t\x03\t\x03" +
		"\t\x03\t\x03\t\x05\t\u023A\n\t\x03\t\x03\t\x05\t\u023E\n\t\x03\t\x03\t" +
		"\x05\t\u0242\n\t\x03\n\x03\n\x03\n\x05\n\u0247\n\n\x03\n\x03\n\x05\n\u024B" +
		"\n\n\x03\n\x03\n\x03\n\x03\n\x05\n\u0251\n\n\x03\n\x03\n\x05\n\u0255\n" +
		"\n\x03\n\x03\n\x03\n\x03\n\x05\n\u025B\n\n\x03\n\x03\n\x05\n\u025F\n\n" +
		"\x03\n\x03\n\x03\n\x03\n\x05\n\u0265\n\n\x03\n\x03\n\x05\n\u0269\n\n\x03" +
		"\n\x03\n\x03\n\x03\n\x05\n\u026F\n\n\x03\n\x03\n\x05\n\u0273\n\n\x03\n" +
		"\x03\n\x03\n\x03\n\x05\n\u0279\n\n\x03\n\x03\n\x05\n\u027D\n\n\x03\n\x03" +
		"\n\x03\n\x03\n\x05\n\u0283\n\n\x03\n\x03\n\x05\n\u0287\n\n\x03\n\x03\n" +
		"\x03\n\x03\n\x05\n\u028D\n\n\x03\n\x03\n\x05\n\u0291\n\n\x03\n\x05\n\u0294" +
		"\n\n\x03\v\x03\v\x03\v\x05\v\u0299\n\v\x03\v\x05\v\u029C\n\v\x03\v\x03" +
		"\v\x05\v\u02A0\n\v\x03\v\x03\v\x03\v\x05\v\u02A5\n\v\x03\v\x03\v\x05\v" +
		"\u02A9\n\v\x03\v\x05\v\u02AC\n\v\x03\v\x03\v\x05\v\u02B0\n\v\x03\v\x03" +
		"\v\x03\v\x05\v\u02B5\n\v\x03\v\x03\v\x05\v\u02B9\n\v\x03\v\x05\v\u02BC" +
		"\n\v\x03\v\x03\v\x05\v\u02C0\n\v\x03\v\x03\v\x03\v\x05\v\u02C5\n\v\x03" +
		"\v\x03\v\x05\v\u02C9\n\v\x03\v\x05\v\u02CC\n\v\x03\v\x03\v\x05\v\u02D0" +
		"\n\v\x03\v\x03\v\x03\v\x05\v\u02D5\n\v\x03\v\x03\v\x05\v\u02D9\n\v\x03" +
		"\v\x05\v\u02DC\n\v\x03\v\x03\v\x05\v\u02E0\n\v\x03\v\x03\v\x03\v\x05\v" +
		"\u02E5\n\v\x03\v\x03\v\x05\v\u02E9\n\v\x03\v\x05\v\u02EC\n\v\x03\v\x03" +
		"\v\x05\v\u02F0\n\v\x03\v\x03\v\x03\v\x05\v\u02F5\n\v\x03\v\x03\v\x05\v" +
		"\u02F9\n\v\x03\v\x05\v\u02FC\n\v\x03\v\x03\v\x05\v\u0300\n\v\x03\v\x03" +
		"\v\x03\v\x05\v\u0305\n\v\x03\v\x03\v\x05\v\u0309\n\v\x03\v\x05\v\u030C" +
		"\n\v\x03\v\x03\v\x05\v\u0310\n\v\x03\v\x03\v\x03\v\x05\v\u0315\n\v\x03" +
		"\v\x03\v\x05\v\u0319\n\v\x03\v\x05\v\u031C\n\v\x03\v\x03\v\x05\v\u0320" +
		"\n\v\x03\v\x03\v\x03\v\x05\v\u0325\n\v\x03\v\x03\v\x05\v\u0329\n\v\x03" +
		"\v\x05\v\u032C\n\v\x03\v\x03\v\x05\v\u0330\n\v\x03\v\x03\v\x03\v\x05\v" +
		"\u0335\n\v\x03\v\x03\v\x05\v\u0339\n\v\x03\v\x05\v\u033C\n\v\x03\v\x03" +
		"\v\x05\v\u0340\n\v\x05\v\u0342\n\v\x03\f\x03\f\x03\f\x05\f\u0347\n\f\x03" +
		"\f\x03\f\x05\f\u034B\n\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x05\f\u0353" +
		"\n\f\x03\f\x03\f\x03\f\x05\f\u0358\n\f\x03\f\x03\f\x05\f\u035C\n\f\x03" +
		"\f\x03\f\x03\f\x05\f\u0361\n\f\x03\f\x03\f\x03\f\x03\f\x03\f\x05\f\u0368" +
		"\n\f\x03\f\x03\f\x03\f\x05\f\u036D\n\f\x03\f\x03\f\x05\f\u0371\n\f\x03" +
		"\f\x03\f\x05\f\u0375\n\f\x03\f\x03\f\x03\f\x03\f\x05\f\u037B\n\f\x03\f" +
		"\x03\f\x05\f\u037F\n\f\x03\f\x03\f\x05\f\u0383\n\f\x03\f\x03\f\x03\f\x03" +
		"\f\x05\f\u0389\n\f\x03\f\x03\f\x05\f\u038D\n\f\x03\f\x03\f\x05\f\u0391" +
		"\n\f\x03\f\x03\f\x03\f\x03\f\x05\f\u0397\n\f\x03\f\x03\f\x05\f\u039B\n" +
		"\f\x03\f\x03\f\x05\f\u039F\n\f\x03\f\x03\f\x03\f\x03\f\x05\f\u03A5\n\f" +
		"\x03\f\x03\f\x05\f\u03A9\n\f\x03\f\x03\f\x03\f\x03\f\x05\f\u03AF\n\f\x03" +
		"\f\x03\f\x05\f\u03B3\n\f\x03\f\x03\f\x03\f\x03\f\x05\f\u03B9\n\f\x03\f" +
		"\x03\f\x05\f\u03BD\n\f\x03\f\x03\f\x03\f\x03\f\x05\f\u03C3\n\f\x03\f\x03" +
		"\f\x05\f\u03C7\n\f\x03\f\x03\f\x03\f\x03\f\x05\f\u03CD\n\f\x03\f\x03\f" +
		"\x03\f\x03\f\x05\f\u03D3\n\f\x03\f\x03\f\x05\f\u03D7\n\f\x03\f\x03\f\x03" +
		"\f\x03\f\x05\f\u03DD\n\f\x03\f\x03\f\x05\f\u03E1\n\f\x03\f\x03\f\x03\f" +
		"\x03\f\x05\f\u03E7\n\f\x03\f\x03\f\x05\f\u03EB\n\f\x03\f\x03\f\x03\f\x03" +
		"\f\x05\f\u03F1\n\f\x03\f\x03\f\x05\f\u03F5\n\f\x03\f\x03\f\x03\f\x03\f" +
		"\x05\f\u03FB\n\f\x03\f\x03\f\x05\f\u03FF\n\f\x03\f\x03\f\x03\f\x03\f\x05" +
		"\f\u0405\n\f\x03\f\x03\f\x03\f\x03\f\x05\f\u040B\n\f\x03\f\x03\f\x03\f" +
		"\x03\f\x05\f\u0411\n\f\x03\f\x03\f\x03\f\x03\f\x05\f\u0417\n\f\x03\f\x03" +
		"\f\x03\f\x03\f\x05\f\u041D\n\f\x03\f\x03\f\x05\f\u0421\n\f\x03\f\x03\f" +
		"\x03\f\x03\f\x05\f\u0427\n\f\x03\f\x03\f\x05\f\u042B\n\f\x03\f\x03\f\x03" +
		"\f\x03\f\x05\f\u0431\n\f\x03\f\x03\f\x05\f\u0435\n\f\x03\f\x03\f\x03\f" +
		"\x03\f\x05\f\u043B\n\f\x03\f\x03\f\x03\f\x03\f\x05\f\u0441\n\f\x03\f\x03" +
		"\f\x03\f\x03\f\x05\f\u0447\n\f\x03\f\x03\f\x03\f\x03\f\x05\f\u044D\n\f" +
		"\x03\f\x03\f\x03\f\x03\f\x05\f\u0453\n\f\x03\f\x05\f\u0456\n\f\x03\r\x03" +
		"\r\x03\r\x05\r\u045B\n\r\x03\r\x03\r\x05\r\u045F\n\r\x03\r\x03\r\x03\r" +
		"\x03\r\x03\r\x03\r\x05\r\u0467\n\r\x03\r\x03\r\x03\r\x05\r\u046C\n\r\x03" +
		"\r\x03\r\x05\r\u0470\n\r\x03\r\x03\r\x03\r\x05\r\u0475\n\r\x03\r\x03\r" +
		"\x03\r\x03\r\x03\r\x05\r\u047C\n\r\x03\r\x03\r\x03\r\x05\r\u0481\n\r\x03" +
		"\r\x03\r\x05\r\u0485\n\r\x03\r\x03\r\x05\r\u0489\n\r\x03\r\x03\r\x03\r" +
		"\x03\r\x05\r\u048F\n\r\x03\r\x03\r\x05\r\u0493\n\r\x03\r\x03\r\x05\r\u0497" +
		"\n\r\x03\r\x03\r\x03\r\x03\r\x05\r\u049D\n\r\x03\r\x03\r\x05\r\u04A1\n" +
		"\r\x03\r\x03\r\x05\r\u04A5\n\r\x03\r\x03\r\x03\r\x03\r\x05\r\u04AB\n\r" +
		"\x03\r\x03\r\x05\r\u04AF\n\r\x03\r\x03\r\x05\r\u04B3\n\r\x03\r\x03\r\x03" +
		"\r\x03\r\x05\r\u04B9\n\r\x03\r\x03\r\x05\r\u04BD\n\r\x03\r\x03\r\x03\r" +
		"\x03\r\x05\r\u04C3\n\r\x03\r\x03\r\x05\r\u04C7\n\r\x03\r\x03\r\x03\r\x03" +
		"\r\x05\r\u04CD\n\r\x03\r\x03\r\x05\r\u04D1\n\r\x03\r\x03\r\x03\r\x03\r" +
		"\x05\r\u04D7\n\r\x03\r\x03\r\x05\r\u04DB\n\r\x03\r\x03\r\x03\r\x03\r\x05" +
		"\r\u04E1\n\r\x03\r\x03\r\x03\r\x03\r\x05\r\u04E7\n\r\x03\r\x03\r\x05\r" +
		"\u04EB\n\r\x03\r\x03\r\x03\r\x03\r\x05\r\u04F1\n\r\x03\r\x03\r\x05\r\u04F5" +
		"\n\r\x03\r\x03\r\x03\r\x03\r\x05\r\u04FB\n\r\x03\r\x03\r\x05\r\u04FF\n" +
		"\r\x03\r\x03\r\x03\r\x03\r\x05\r\u0505\n\r\x03\r\x03\r\x05\r\u0509\n\r" +
		"\x03\r\x03\r\x03\r\x03\r\x05\r\u050F\n\r\x03\r\x03\r\x05\r\u0513\n\r\x03" +
		"\r\x03\r\x03\r\x03\r\x05\r\u0519\n\r\x03\r\x03\r\x03\r\x03\r\x05\r\u051F" +
		"\n\r\x03\r\x03\r\x03\r\x03\r\x05\r\u0525\n\r\x03\r\x03\r\x05\r\u0529\n" +
		"\r\x03\r\x03\r\x03\r\x03\r\x05\r\u052F\n\r\x03\r\x03\r\x05\r\u0533\n\r" +
		"\x03\r\x03\r\x03\r\x03\r\x05\r\u0539\n\r\x03\r\x03\r\x05\r\u053D\n\r\x03" +
		"\r\x03\r\x03\r\x03\r\x05\r\u0543\n\r\x03\r\x03\r\x03\r\x03\r\x05\r\u0549" +
		"\n\r\x03\r\x03\r\x03\r\x03\r\x05\r\u054F\n\r\x03\r\x03\r\x03\r\x03\r\x05" +
		"\r\u0555\n\r\x03\r\x03\r\x03\r\x03\r\x05\r\u055B\n\r\x03\r\x05\r\u055E" +
		"\n\r\x03\x0E\x03\x0E\x03\x0E\x05\x0E\u0563\n\x0E\x03\x0E\x03\x0E\x03\x0E" +
		"\x03\x0E\x05\x0E\u0569\n\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E\u056F" +
		"\n\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E\u0575\n\x0E\x03\x0E\x03" +
		"\x0E\x03\x0E\x03\x0E\x05\x0E\u057B\n\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E" +
		"\x05\x0E\u0581\n\x0E\x03\x0E\x03\x0E\x05\x0E\u0585\n\x0E\x03\x0E\x03\x0E" +
		"\x03\x0E\x03\x0E\x05\x0E\u058B\n\x0E\x03\x0E\x03\x0E\x05\x0E\u058F\n\x0E" +
		"\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E\u0595\n\x0E\x03\x0E\x03\x0E\x05" +
		"\x0E\u0599\n\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E\u05A0" +
		"\n\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E\u05A6\n\x0E\x03\x0E\x03" +
		"\x0E\x03\x0E\x03\x0E\x05\x0E\u05AC\n\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E" +
		"\x05\x0E\u05B2\n\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E\u05B8\n\x0E" +
		"\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E\u05BE\n\x0E\x03\x0E\x03\x0E\x03" +
		"\x0E\x03\x0E\x05\x0E\u05C4\n\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E" +
		"\u05CA\n\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E\u05D0\n\x0E\x03\x0E" +
		"\x03\x0E\x03\x0E\x03\x0E\x05\x0E\u05D6\n\x0E\x03\x0E\x03\x0E\x03\x0E\x03" +
		"\x0E\x05\x0E\u05DC\n\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E\u05E2" +
		"\n\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E\u05E8\n\x0E\x03\x0E\x03" +
		"\x0E\x03\x0E\x03\x0E\x05\x0E\u05EE\n\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E" +
		"\x05\x0E\u05F4\n\x0E\x03\x0E\x03\x0E\x05\x0E\u05F8\n\x0E\x03\x0E\x03\x0E" +
		"\x03\x0E\x03\x0E\x05\x0E\u05FE\n\x0E\x03\x0E\x03\x0E\x05\x0E\u0602\n\x0E" +
		"\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E\u0608\n\x0E\x03\x0E\x03\x0E\x05" +
		"\x0E\u060C\n\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E\u0612\n\x0E\x03" +
		"\x0E\x03\x0E\x05\x0E\u0616\n\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E" +
		"\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E\u0624" +
		"\n\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E\u0629\n\x0E\x03\x0E\x05\x0E\u062C" +
		"\n\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F" +
		"\x03\x0F\x05\x0F\u0637\n\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F\u063D" +
		"\n\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F\u0644\n\x0F\x03" +
		"\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F\u064B\n\x0F\x03\x0F\x03\x0F" +
		"\x03\x0F\x03\x0F\x03\x0F\x05\x0F\u0652\n\x0F\x03\x0F\x03\x0F\x03\x0F\x03" +
		"\x0F\x03\x0F\x05\x0F\u0659\n\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F" +
		"\x05\x0F\u0660\n\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03" +
		"\x0F\x03\x0F\x03\x0F\x05\x0F\u066B\n\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F" +
		"\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F\u0675\n\x0F\x03\x0F\x03\x0F\x03" +
		"\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F\u067F\n\x0F\x03\x0F" +
		"\x05\x0F\u0682\n\x0F\x03\x10\x03\x10\x03\x10\x05\x10\u0687\n\x10\x03\x10" +
		"\x03\x10\x05\x10\u068B\n\x10\x03\x10\x03\x10\x03\x10\x03\x10\x05\x10\u0691" +
		"\n\x10\x03\x10\x03\x10\x05\x10\u0695\n\x10\x03\x10\x03\x10\x03\x10\x03" +
		"\x10\x05\x10\u069B\n\x10\x03\x10\x03\x10\x03\x10\x03\x10\x05\x10\u06A1" +
		"\n\x10\x03\x10\x03\x10\x03\x10\x03\x10\x05\x10\u06A7\n\x10\x03\x10\x05" +
		"\x10\u06AA\n\x10\x03\x11\x03\x11\x03\x11\x05\x11\u06AF\n\x11\x03\x11\x03" +
		"\x11\x05\x11\u06B3\n\x11\x03\x11\x03\x11\x03\x11\x03\x11\x05\x11\u06B9" +
		"\n\x11\x03\x11\x03\x11\x05\x11\u06BD\n\x11\x03\x11\x03\x11\x03\x11\x03" +
		"\x11\x05\x11\u06C3\n\x11\x03\x11\x03\x11\x03\x11\x03\x11\x05\x11\u06C9" +
		"\n\x11\x03\x11\x03\x11\x03\x11\x03\x11\x05\x11\u06CF\n\x11\x03\x11\x05" +
		"\x11\u06D2\n\x11\x03\x12\x03\x12\x03\x12\x05\x12\u06D7\n\x12\x03\x12\x07" +
		"\x12\u06DA\n\x12\f\x12\x0E\x12\u06DD\v\x12\x03\x12\x03\x12\x03\x12\x05" +
		"\x12\u06E2\n\x12\x03\x12\x07\x12\u06E5\n\x12\f\x12\x0E\x12\u06E8\v\x12" +
		"\x03\x12\x03\x12\x03\x12\x05\x12\u06ED\n\x12\x03\x12\x07\x12\u06F0\n\x12" +
		"\f\x12\x0E\x12\u06F3\v\x12\x03\x12\x03\x12\x03\x12\x05\x12\u06F8\n\x12" +
		"\x03\x12\x07\x12\u06FB\n\x12\f\x12\x0E\x12\u06FE\v\x12\x03\x12\x03\x12" +
		"\x03\x12\x03\x12\x03\x12\x03\x12\x05\x12\u0706\n\x12\x03\x13\x05\x13\u0709" +
		"\n\x13\x03\x13\x03\x13\x05\x13\u070D\n\x13\x03\x13\x03\x13\x05\x13\u0711" +
		"\n\x13\x03\x13\x03\x13\x05\x13\u0715\n\x13\x03\x13\x03\x13\x03\x13\x03" +
		"\x13\x05\x13\u071B\n\x13\x03\x13\x07\x13\u071E\n\x13\f\x13\x0E\x13\u0721" +
		"\v\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13" +
		"\x03\x13\x05\x13\u072C\n\x13\x03\x13\x05\x13\u072F\n\x13\x03\x14\x03\x14" +
		"\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14" +
		"\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14" +
		"\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x05\x14\u074A\n\x14\x03\x14\x03" +
		"\x14\x03\x14\x07\x14\u074F\n\x14\f\x14\x0E\x14\u0752\v\x14\x03\x15\x03" +
		"\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03" +
		"\x15\x03\x15\x05\x15\u0760\n\x15\x03\x15\x03-\x02\x03&\x16\x02\x02\x04" +
		"\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02" +
		"\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02\x02\x02\x02" +
		"\u096D\x02-\x03\x02\x02\x02\x046\x03\x02\x02\x02\x06B\x03\x02\x02\x02" +
		"\bD\x03\x02\x02\x02\nQ\x03\x02\x02\x02\f\u01FB\x03\x02\x02\x02\x0E\u01FD" +
		"\x03\x02\x02\x02\x10\u0241\x03\x02\x02\x02\x12\u0293\x03\x02\x02\x02\x14" +
		"\u0341\x03\x02\x02\x02\x16\u0455\x03\x02\x02\x02\x18\u055D\x03\x02\x02" +
		"\x02\x1A\u062B\x03\x02\x02\x02\x1C\u0681\x03\x02\x02\x02\x1E\u06A9\x03" +
		"\x02\x02\x02 \u06D1\x03\x02\x02\x02\"\u0705\x03\x02\x02\x02$\u072E\x03" +
		"\x02\x02\x02&\u0749\x03\x02\x02\x02(\u075F\x03\x02\x02\x02*,\x05\x04\x03" +
		"\x02+*\x03\x02\x02\x02,/\x03\x02\x02\x02-.\x03\x02\x02\x02-+\x03\x02\x02" +
		"\x02.0\x03\x02\x02\x02/-\x03\x02\x02\x0201\x07\x02\x02\x031\x03\x03\x02" +
		"\x02\x0223\x05\x06\x04\x0234\x07\xCB\x02\x0247\x03\x02\x02\x0257\x07\xCB" +
		"\x02\x0262\x03\x02\x02\x0265\x03\x02\x02\x027\x05\x03\x02\x02\x0289\x05" +
		"\b\x05\x029:\x05\"\x12\x02:C\x03\x02\x02\x02;<\x05\b\x05\x02<=\x05\n\x06" +
		"\x02=C\x03\x02\x02\x02>C\x05\b\x05\x02?C\x05$\x13\x02@C\x05\"\x12\x02" +
		"AC\x05\n\x06\x02B8\x03\x02\x02\x02B;\x03\x02\x02\x02B>\x03\x02\x02\x02" +
		"B?\x03\x02\x02\x02B@\x03\x02\x02\x02BA\x03\x02\x02\x02C\x07\x03\x02\x02" +
		"\x02DE\x07\xCA\x02\x02E\t\x03\x02\x02\x02FR\x05\f\x07\x02GR\x05\x0E\b" +
		"\x02HR\x05\x10\t\x02IR\x05\x12\n\x02JR\x05\x14\v\x02KR\x05\x16\f\x02L" +
		"R\x05\x18\r\x02MR\x05\x1A\x0E\x02NR\x05\x1C\x0F\x02OR\x05\x1E\x10\x02" +
		"PR\x05 \x11\x02QF\x03\x02\x02\x02QG\x03\x02\x02\x02QH\x03\x02\x02\x02" +
		"QI\x03\x02\x02\x02QJ\x03\x02\x02\x02QK\x03\x02\x02\x02QL\x03\x02\x02\x02" +
		"QM\x03\x02\x02\x02QN\x03\x02\x02\x02QO\x03\x02\x02\x02QP\x03\x02\x02\x02" +
		"R\v\x03\x02\x02\x02ST\x07\v\x02\x02TV\x07\xC3\x02\x02UW\x07\x03\x02\x02" +
		"VU\x03\x02\x02\x02VW\x03\x02\x02\x02WX\x03\x02\x02\x02X\u01FC\x05&\x14" +
		"\x02YZ\x07\f\x02\x02Z\\\x07\xC3\x02\x02[]\x07\x03\x02\x02\\[\x03\x02\x02" +
		"\x02\\]\x03\x02\x02\x02]^\x03\x02\x02\x02^\u01FC\x05&\x14\x02_`\x07\r" +
		"\x02\x02`b\x07\xC3\x02\x02ac\x07\x03\x02\x02ba\x03\x02\x02\x02bc\x03\x02" +
		"\x02\x02cd\x03\x02\x02\x02d\u01FC\x07\xC9\x02\x02ef\x07\x0E\x02\x02fh" +
		"\x07\xC3\x02\x02gi\x07\x03\x02\x02hg\x03\x02\x02\x02hi\x03\x02\x02\x02" +
		"it\x03\x02\x02\x02jl\x07\xC3\x02\x02km\x07\x03\x02\x02lk\x03\x02\x02\x02" +
		"lm\x03\x02\x02\x02mn\x03\x02\x02\x02nu\x05&\x14\x02op\x05&\x14\x02pq\x07" +
		"\x04\x02\x02qr\x07\xC3\x02\x02rs\x07\x05\x02\x02su\x03\x02\x02\x02tj\x03" +
		"\x02\x02\x02to\x03\x02\x02\x02u\u01FC\x03\x02\x02\x02vw\x07\x0F\x02\x02" +
		"wy\x07\xC3\x02\x02xz\x07\x03\x02\x02yx\x03\x02\x02\x02yz\x03\x02\x02\x02" +
		"z{\x03\x02\x02\x02{}\x07\xC3\x02\x02|~\x07\x03\x02\x02}|\x03\x02\x02\x02" +
		"}~\x03\x02\x02\x02~\x7F\x03\x02\x02\x02\x7F\u01FC\x07\xC9\x02\x02\x80" +
		"\x81\x07\x10\x02\x02\x81\x83\x07\xC3\x02\x02\x82\x84\x07\x03\x02\x02\x83" +
		"\x82\x03";
	private static readonly _serializedATNSegment1: string =
		"\x02\x02\x02\x83\x84\x03\x02\x02\x02\x84\x85\x03\x02\x02\x02\x85\x87\x07" +
		"\xC3\x02\x02\x86\x88\x07\x03\x02\x02\x87\x86\x03\x02\x02\x02\x87\x88\x03" +
		"\x02\x02\x02\x88\x89\x03\x02\x02\x02\x89\u01FC\x07\xC9\x02\x02\x8A\x8B" +
		"\x07\x11\x02\x02\x8B\x8D\x07\xC3\x02\x02\x8C\x8E\x07\x03\x02\x02\x8D\x8C" +
		"\x03\x02\x02\x02\x8D\x8E\x03\x02\x02\x02\x8E\x8F\x03\x02\x02\x02\x8F\x91" +
		"\x07\xC3\x02\x02\x90\x92\x07\x03\x02\x02\x91\x90\x03\x02\x02\x02\x91\x92" +
		"\x03\x02\x02\x02\x92\x93\x03\x02\x02\x02\x93\u01FC\x07\xC9\x02\x02\x94" +
		"\x95\x07\x12\x02\x02\x95\x97\x07\xC3\x02\x02\x96\x98\x07\x03\x02\x02\x97" +
		"\x96\x03\x02\x02\x02\x97\x98\x03\x02\x02\x02\x98\x99\x03\x02\x02\x02\x99" +
		"\x9B\x07\xC3\x02\x02\x9A\x9C\x07\x03\x02\x02\x9B\x9A\x03\x02\x02\x02\x9B" +
		"\x9C\x03\x02\x02\x02\x9C\x9D\x03\x02\x02\x02\x9D\u01FC\x07\xC9\x02\x02" +
		"\x9E\x9F\x07\x13\x02\x02\x9F\xA1\x07\xC3\x02\x02\xA0\xA2\x07\x03\x02\x02" +
		"\xA1\xA0\x03\x02\x02\x02\xA1\xA2\x03\x02\x02\x02\xA2\xA3\x03\x02\x02\x02" +
		"\xA3\xA5\x07\xC3\x02\x02\xA4\xA6\x07\x03\x02\x02\xA5\xA4\x03\x02\x02\x02" +
		"\xA5\xA6\x03\x02\x02\x02\xA6\xA7\x03\x02\x02\x02\xA7\u01FC\x07\xC9\x02" +
		"\x02\xA8\xA9\x07\x14\x02\x02\xA9\xAB\x07\xC3\x02\x02\xAA\xAC\x07\x03\x02" +
		"\x02\xAB\xAA\x03\x02\x02\x02\xAB\xAC\x03\x02\x02\x02\xAC\xAD\x03\x02\x02" +
		"\x02\xAD\xAF\x07\xC3\x02\x02\xAE\xB0\x07\x03\x02\x02\xAF\xAE\x03\x02\x02" +
		"\x02\xAF\xB0\x03\x02\x02\x02\xB0\xB1\x03\x02\x02\x02\xB1\u01FC\x07\xC9" +
		"\x02\x02\xB2\xB3\x07\x15\x02\x02\xB3\xB5\x07\xC3\x02\x02\xB4\xB6\x07\x03" +
		"\x02\x02\xB5\xB4\x03\x02\x02\x02\xB5\xB6\x03\x02\x02\x02\xB6\xC1\x03\x02" +
		"\x02\x02\xB7\xB9\x07\xC3\x02\x02\xB8\xBA\x07\x03\x02\x02\xB9\xB8\x03\x02" +
		"\x02\x02\xB9\xBA\x03\x02\x02\x02\xBA\xBB\x03\x02\x02\x02\xBB\xC2\x05&" +
		"\x14\x02\xBC\xBD\x05&\x14\x02\xBD\xBE\x07\x04\x02\x02\xBE\xBF\x07\xC3" +
		"\x02\x02\xBF\xC0\x07\x05\x02\x02\xC0\xC2\x03\x02\x02\x02\xC1\xB7\x03\x02" +
		"\x02\x02\xC1\xBC\x03\x02\x02\x02\xC2\u01FC\x03\x02\x02\x02\xC3\xC4\x07" +
		"\x16\x02\x02\xC4\xC6\x07\xC3\x02\x02\xC5\xC7\x07\x03\x02\x02\xC6\xC5\x03" +
		"\x02\x02\x02\xC6\xC7\x03\x02\x02\x02\xC7\xD2\x03\x02\x02\x02\xC8\xCA\x07" +
		"\xC3\x02\x02\xC9\xCB\x07\x03\x02\x02\xCA\xC9\x03\x02\x02\x02\xCA\xCB\x03" +
		"\x02\x02\x02\xCB\xCC\x03\x02\x02\x02\xCC\xD3\x05&\x14\x02\xCD\xCE\x05" +
		"&\x14\x02\xCE\xCF\x07\x04\x02\x02\xCF\xD0\x07\xC3\x02\x02\xD0\xD1\x07" +
		"\x05\x02\x02\xD1\xD3\x03\x02\x02\x02\xD2\xC8\x03\x02\x02\x02\xD2\xCD\x03" +
		"\x02\x02\x02\xD3\u01FC\x03\x02\x02\x02\xD4\xD5\x07\x17\x02\x02\xD5\xD7" +
		"\x07\xC3\x02\x02\xD6\xD8\x07\x03\x02\x02\xD7\xD6\x03\x02\x02\x02\xD7\xD8" +
		"\x03\x02\x02\x02\xD8\xE3\x03\x02\x02\x02\xD9\xDB\x07\xC3\x02\x02\xDA\xDC" +
		"\x07\x03\x02\x02\xDB\xDA\x03\x02\x02\x02\xDB\xDC\x03\x02\x02\x02\xDC\xDD" +
		"\x03\x02\x02\x02\xDD\xE4\x05&\x14\x02\xDE\xDF\x05&\x14\x02\xDF\xE0\x07" +
		"\x04\x02\x02\xE0\xE1\x07\xC3\x02\x02\xE1\xE2\x07\x05\x02\x02\xE2\xE4\x03" +
		"\x02\x02\x02\xE3\xD9\x03\x02\x02\x02\xE3\xDE\x03\x02\x02\x02\xE4\u01FC" +
		"\x03\x02\x02\x02\xE5\xE6\x07\x18\x02\x02\xE6\xE8\x07\xC3\x02\x02\xE7\xE9" +
		"\x07\x03\x02\x02\xE8\xE7\x03\x02\x02\x02\xE8\xE9\x03\x02\x02\x02\xE9\xF4" +
		"\x03\x02\x02\x02\xEA\xEC\x07\xC3\x02\x02\xEB\xED\x07\x03\x02\x02\xEC\xEB" +
		"\x03\x02\x02\x02\xEC\xED\x03\x02\x02\x02\xED\xEE\x03\x02\x02\x02\xEE\xF5" +
		"\x05&\x14\x02\xEF\xF0\x05&\x14\x02\xF0\xF1\x07\x04\x02\x02\xF1\xF2\x07" +
		"\xC3\x02\x02\xF2\xF3\x07\x05\x02\x02\xF3\xF5\x03\x02\x02\x02\xF4\xEA\x03" +
		"\x02\x02\x02\xF4\xEF\x03\x02\x02\x02\xF5\u01FC\x03\x02\x02\x02\xF6\xF7" +
		"\x07\x19\x02\x02\xF7\xF9\x07\xC3\x02\x02\xF8\xFA\x07\x03\x02\x02\xF9\xF8" +
		"\x03\x02\x02\x02\xF9\xFA\x03\x02\x02\x02\xFA\u0105\x03\x02\x02\x02\xFB" +
		"\xFD\x07\xC3\x02\x02\xFC\xFE\x07\x03\x02\x02\xFD\xFC\x03\x02\x02\x02\xFD" +
		"\xFE\x03\x02\x02\x02\xFE\xFF\x03\x02\x02\x02\xFF\u0106\x05&\x14\x02\u0100" +
		"\u0101\x05&\x14\x02\u0101\u0102\x07\x04\x02\x02\u0102\u0103\x07\xC3\x02" +
		"\x02\u0103\u0104\x07\x05\x02\x02\u0104\u0106\x03\x02\x02\x02\u0105\xFB" +
		"\x03\x02\x02\x02\u0105\u0100\x03\x02\x02\x02\u0106\u01FC\x03\x02\x02\x02" +
		"\u0107\u0108\x07\x1A\x02\x02\u0108\u010A\x07\xC3\x02\x02\u0109\u010B\x07" +
		"\x03\x02\x02\u010A\u0109\x03\x02\x02\x02\u010A\u010B\x03\x02\x02\x02\u010B" +
		"\u0116\x03\x02\x02\x02\u010C\u010E\x07\xC3\x02\x02\u010D\u010F\x07\x03" +
		"\x02\x02\u010E\u010D\x03\x02\x02\x02\u010E\u010F\x03\x02\x02\x02\u010F" +
		"\u0110\x03\x02\x02\x02\u0110\u0117\x05&\x14\x02\u0111\u0112\x05&\x14\x02" +
		"\u0112\u0113\x07\x04\x02\x02\u0113\u0114\x07\xC3\x02\x02\u0114\u0115\x07" +
		"\x05\x02\x02\u0115\u0117\x03\x02\x02\x02\u0116\u010C\x03\x02\x02\x02\u0116" +
		"\u0111\x03\x02\x02\x02\u0117\u01FC\x03\x02\x02\x02\u0118\u0119\x07\x1B" +
		"\x02\x02\u0119\u011B\x07\xC3\x02\x02\u011A\u011C\x07\x03\x02\x02\u011B" +
		"\u011A\x03\x02\x02\x02\u011B\u011C\x03\x02\x02\x02\u011C\u0127\x03\x02" +
		"\x02\x02\u011D\u011F\x07\xC3\x02\x02\u011E\u0120\x07\x03\x02\x02\u011F" +
		"\u011E\x03\x02\x02\x02\u011F\u0120\x03\x02\x02\x02\u0120\u0121\x03\x02" +
		"\x02\x02\u0121\u0128\x05&\x14\x02\u0122\u0123\x05&\x14\x02\u0123\u0124" +
		"\x07\x04\x02\x02\u0124\u0125\x07\xC3\x02\x02\u0125\u0126\x07\x05\x02\x02" +
		"\u0126\u0128\x03\x02\x02\x02\u0127\u011D\x03\x02\x02\x02\u0127\u0122\x03" +
		"\x02\x02\x02\u0128\u01FC\x03\x02\x02\x02\u0129\u012A\x07\x1C\x02\x02\u012A" +
		"\u012C\x07\xC3\x02\x02\u012B\u012D\x07\x03\x02\x02\u012C\u012B\x03\x02" +
		"\x02\x02\u012C\u012D\x03\x02\x02\x02\u012D\u0138\x03\x02\x02\x02\u012E" +
		"\u0130\x07\xC3\x02\x02\u012F\u0131\x07\x03\x02\x02\u0130\u012F\x03\x02" +
		"\x02\x02\u0130\u0131\x03\x02\x02\x02\u0131\u0132\x03\x02\x02\x02\u0132" +
		"\u0139\x05&\x14\x02\u0133\u0134\x05&\x14\x02\u0134\u0135\x07\x04\x02\x02" +
		"\u0135\u0136\x07\xC3\x02\x02\u0136\u0137\x07\x05\x02\x02\u0137\u0139\x03" +
		"\x02\x02\x02\u0138\u012E\x03\x02\x02\x02\u0138\u0133\x03\x02\x02\x02\u0139" +
		"\u01FC\x03\x02\x02\x02\u013A\u013B\x07\x1D\x02\x02\u013B\u013D\x07\xC3" +
		"\x02\x02\u013C\u013E\x07\x03\x02\x02\u013D\u013C\x03\x02\x02\x02\u013D" +
		"\u013E\x03\x02\x02\x02\u013E\u013F\x03\x02\x02\x02\u013F\u0141\x07\xC3" +
		"\x02\x02\u0140\u0142\x07\x03\x02\x02\u0141\u0140\x03\x02\x02\x02\u0141" +
		"\u0142\x03\x02\x02\x02\u0142\u0143\x03\x02\x02\x02\u0143\u01FC\x05&\x14" +
		"\x02\u0144\u0145\x07\x1E\x02\x02\u0145\u0147\x07\xC3\x02\x02\u0146\u0148" +
		"\x07\x03\x02\x02\u0147\u0146\x03\x02\x02\x02\u0147\u0148\x03\x02\x02\x02" +
		"\u0148\u0149\x03\x02\x02\x02\u0149\u014B\x07\xC3\x02\x02\u014A\u014C\x07" +
		"\x03\x02\x02\u014B\u014A\x03\x02\x02\x02\u014B\u014C\x03\x02\x02\x02\u014C" +
		"\u014D\x03\x02\x02\x02\u014D\u01FC\x05&\x14\x02\u014E\u014F\x07\x1F\x02" +
		"\x02\u014F\u0151\x07\xC3\x02\x02\u0150\u0152\x07\x03\x02\x02\u0151\u0150" +
		"\x03\x02\x02\x02\u0151\u0152\x03\x02\x02\x02\u0152\u0153\x03\x02\x02\x02" +
		"\u0153\u0155\x07\xC3\x02\x02\u0154\u0156\x07\x03\x02\x02\u0155\u0154\x03" +
		"\x02\x02\x02\u0155\u0156\x03\x02\x02\x02\u0156\u0157\x03\x02\x02\x02\u0157" +
		"\u01FC\x05&\x14\x02\u0158\u0159\x07 \x02\x02\u0159\u015B\x07\xC3\x02\x02" +
		"\u015A\u015C\x07\x03\x02\x02\u015B\u015A\x03\x02\x02\x02\u015B\u015C\x03" +
		"\x02\x02\x02\u015C\u015D\x03\x02\x02\x02\u015D\u015F\x07\xC3\x02\x02\u015E" +
		"\u0160\x07\x03\x02\x02\u015F\u015E\x03\x02\x02\x02\u015F\u0160\x03\x02" +
		"\x02\x02\u0160\u0161\x03\x02\x02\x02\u0161\u01FC\x05&\x14\x02\u0162\u0163" +
		"\x07!\x02\x02\u0163\u0165\x07\xC3\x02\x02\u0164\u0166\x07\x03\x02\x02" +
		"\u0165\u0164\x03\x02\x02\x02\u0165\u0166\x03\x02\x02\x02\u0166\u0167\x03" +
		"\x02\x02\x02\u0167\u0169\x07\xC3\x02\x02\u0168\u016A\x07\x03\x02\x02\u0169" +
		"\u0168\x03\x02\x02\x02\u0169\u016A\x03\x02\x02\x02\u016A\u016B\x03\x02" +
		"\x02\x02\u016B\u01FC\x05&\x14\x02\u016C\u016D\x07\"\x02\x02\u016D\u016F" +
		"\x07\xC3\x02\x02\u016E\u0170\x07\x03\x02\x02\u016F\u016E\x03\x02\x02\x02" +
		"\u016F\u0170\x03\x02\x02\x02\u0170\u0171\x03\x02\x02\x02\u0171\u0173\x07" +
		"\xC3\x02\x02\u0172\u0174\x07\x03\x02\x02\u0173\u0172\x03\x02\x02\x02\u0173" +
		"\u0174\x03\x02\x02\x02\u0174\u0175\x03\x02\x02\x02\u0175\u01FC\x05&\x14" +
		"\x02\u0176\u0177\x07#\x02\x02\u0177\u0179\x07\xC3\x02\x02\u0178\u017A" +
		"\x07\x03\x02\x02\u0179\u0178\x03\x02\x02\x02\u0179\u017A\x03\x02\x02\x02" +
		"\u017A\u017B\x03\x02\x02\x02\u017B\u017D\x07\xC3\x02\x02\u017C\u017E\x07" +
		"\x03\x02\x02\u017D\u017C\x03\x02\x02\x02\u017D\u017E\x03\x02\x02\x02\u017E" +
		"\u017F\x03\x02\x02\x02\u017F\u01FC\x05&\x14\x02\u0180\u0181\x07$\x02\x02" +
		"\u0181\u0183\x07\xC3\x02\x02\u0182\u0184\x07\x03\x02\x02\u0183\u0182\x03" +
		"\x02\x02\x02\u0183\u0184\x03\x02\x02\x02\u0184\u0185\x03\x02\x02\x02\u0185" +
		"\u0187\x07\xC3\x02\x02\u0186\u0188\x07\x03\x02\x02\u0187\u0186\x03\x02" +
		"\x02\x02\u0187\u0188\x03\x02\x02\x02\u0188\u0189\x03\x02\x02\x02\u0189" +
		"\u01FC\x05&\x14\x02\u018A\u018B\x07%\x02\x02\u018B\u018D\x07\xC3\x02\x02" +
		"\u018C\u018E\x07\x03\x02\x02\u018D\u018C\x03\x02\x02\x02\u018D\u018E\x03" +
		"\x02\x02\x02\u018E\u018F\x03\x02\x02\x02\u018F\u0191\x07\xC3\x02\x02\u0190" +
		"\u0192\x07\x03\x02\x02\u0191\u0190\x03\x02\x02\x02\u0191\u0192\x03\x02" +
		"\x02\x02\u0192\u0193\x03\x02\x02\x02\u0193\u01FC\x05&\x14\x02\u0194\u0195" +
		"\x07&\x02\x02\u0195\u0197\x07\xC3\x02\x02\u0196\u0198\x07\x03\x02\x02" +
		"\u0197\u0196\x03\x02\x02\x02\u0197\u0198\x03\x02\x02\x02\u0198\u0199\x03" +
		"\x02\x02\x02\u0199\u019B\x07\xC3\x02\x02\u019A\u019C\x07\x03\x02\x02\u019B" +
		"\u019A\x03\x02\x02\x02\u019B\u019C\x03\x02\x02\x02\u019C\u019D\x03\x02" +
		"\x02\x02\u019D\u01FC\x07\xC3\x02\x02\u019E\u019F\x07\'\x02\x02\u019F\u01A1" +
		"\x07\xC3\x02\x02\u01A0\u01A2\x07\x03\x02\x02\u01A1\u01A0\x03\x02\x02\x02" +
		"\u01A1\u01A2\x03\x02\x02\x02\u01A2\u01A3\x03\x02\x02\x02\u01A3\u01A5\x07" +
		"\xC3\x02\x02\u01A4\u01A6\x07\x03\x02\x02\u01A5\u01A4\x03\x02\x02\x02\u01A5" +
		"\u01A6\x03\x02\x02\x02\u01A6\u01A7\x03\x02\x02\x02\u01A7\u01FC\x07\xC3" +
		"\x02\x02\u01A8\u01A9\x07(\x02\x02\u01A9\u01AB\x07\xC3\x02\x02\u01AA\u01AC" +
		"\x07\x03\x02\x02\u01AB\u01AA\x03\x02\x02\x02\u01AB\u01AC\x03\x02\x02\x02" +
		"\u01AC\u01AD\x03\x02\x02\x02\u01AD\u01AF\x07\xC3\x02\x02\u01AE\u01B0\x07" +
		"\x03\x02\x02\u01AF\u01AE\x03\x02\x02\x02\u01AF\u01B0\x03\x02\x02\x02\u01B0" +
		"\u01B1\x03\x02\x02\x02\u01B1\u01FC\x07\xC3\x02\x02\u01B2\u01B3\x07)\x02" +
		"\x02\u01B3\u01B5\x07\xC3\x02\x02\u01B4\u01B6\x07\x03\x02\x02\u01B5\u01B4" +
		"\x03\x02\x02\x02\u01B5\u01B6\x03\x02\x02\x02\u01B6\u01B7\x03\x02\x02\x02" +
		"\u01B7\u01B9\x07\xC3\x02\x02\u01B8\u01BA\x07\x03\x02\x02\u01B9\u01B8\x03" +
		"\x02\x02\x02\u01B9\u01BA\x03\x02\x02\x02\u01BA\u01BB\x03\x02\x02\x02\u01BB" +
		"\u01FC\x07\xC3\x02\x02\u01BC\u01BD\x07*\x02\x02\u01BD\u01BF\x07\xC3\x02" +
		"\x02\u01BE\u01C0\x07\x03\x02\x02\u01BF\u01BE\x03\x02\x02\x02\u01BF\u01C0" +
		"\x03\x02\x02\x02\u01C0\u01C1\x03\x02\x02\x02\u01C1\u01C3\x07\xC3\x02\x02" +
		"\u01C2\u01C4\x07\x03\x02\x02\u01C3\u01C2\x03\x02\x02\x02\u01C3\u01C4\x03" +
		"\x02\x02\x02\u01C4\u01C5\x03\x02\x02\x02\u01C5\u01FC\x07\xC3\x02\x02\u01C6" +
		"\u01C7\x07+\x02\x02\u01C7\u01C9\x07\xC3\x02\x02\u01C8\u01CA\x07\x03\x02" +
		"\x02\u01C9\u01C8\x03\x02\x02\x02\u01C9\u01CA\x03\x02\x02\x02\u01CA\u01CB" +
		"\x03\x02\x02\x02\u01CB\u01CD\x07\xC3\x02\x02\u01CC\u01CE\x07\x03\x02\x02" +
		"\u01CD\u01CC\x03\x02\x02\x02\u01CD\u01CE\x03\x02\x02\x02\u01CE\u01CF\x03" +
		"\x02\x02\x02\u01CF\u01FC\x07\xC3\x02\x02\u01D0\u01D1\x07,\x02\x02\u01D1" +
		"\u01D3\x07\xC3\x02\x02\u01D2\u01D4\x07\x03\x02\x02\u01D3\u01D2\x03\x02" +
		"\x02\x02\u01D3\u01D4\x03\x02\x02\x02\u01D4\u01D5\x03\x02\x02\x02\u01D5" +
		"\u01D7\x07\xC3\x02\x02\u01D6\u01D8\x07\x03\x02\x02\u01D7\u01D6\x03\x02" +
		"\x02\x02\u01D7\u01D8\x03\x02\x02\x02\u01D8\u01D9\x03\x02\x02\x02\u01D9" +
		"\u01FC\x07\xC3\x02\x02\u01DA\u01DB\x07-\x02\x02\u01DB\u01DD\x07\xC3\x02" +
		"\x02\u01DC\u01DE\x07\x03\x02\x02\u01DD\u01DC\x03\x02\x02\x02\u01DD\u01DE" +
		"\x03\x02\x02\x02\u01DE\u01DF\x03\x02\x02\x02\u01DF\u01E1\x07\xC3\x02\x02" +
		"\u01E0\u01E2\x07\x03\x02\x02\u01E1\u01E0\x03\x02\x02\x02\u01E1\u01E2\x03" +
		"\x02\x02\x02\u01E2\u01E3\x03\x02\x02\x02\u01E3\u01FC\x07\xC3\x02\x02\u01E4" +
		"\u01E5\x07.\x02\x02\u01E5\u01E7\x07\xC3\x02\x02\u01E6\u01E8\x07\x03\x02" +
		"\x02\u01E7\u01E6\x03\x02\x02\x02\u01E7\u01E8\x03\x02\x02\x02\u01E8\u01E9" +
		"\x03\x02\x02\x02\u01E9\u01EB\x07\xC3\x02\x02\u01EA\u01EC\x07\x03\x02\x02" +
		"\u01EB\u01EA\x03\x02\x02\x02\u01EB\u01EC\x03\x02\x02\x02\u01EC\u01ED\x03" +
		"\x02\x02\x02\u01ED\u01FC\x07\xC3\x02\x02\u01EE\u01EF\x07/\x02\x02\u01EF" +
		"\u01F1\x07\xC3\x02\x02\u01F0\u01F2\x07\x03\x02\x02\u01F1\u01F0\x03\x02" +
		"\x02\x02\u01F1\u01F2\x03\x02\x02\x02\u01F2\u01F3\x03\x02\x02\x02\u01F3" +
		"\u01F5\x07\xC3\x02\x02\u01F4\u01F6\x07\x03\x02\x02\u01F5\u01F4\x03\x02" +
		"\x02\x02\u01F5\u01F6\x03\x02\x02\x02\u01F6\u01F7\x03\x02\x02\x02\u01F7" +
		"\u01FC\x07\xC3\x02\x02\u01F8\u01FC\x070\x02\x02\u01F9\u01FC\x071\x02\x02" +
		"\u01FA\u01FC\x072\x02\x02\u01FBS\x03\x02\x02\x02\u01FBY\x03\x02\x02\x02" +
		"\u01FB_\x03\x02\x02\x02\u01FBe\x03\x02\x02\x02\u01FBv\x03\x02\x02\x02" +
		"\u01FB\x80\x03\x02\x02\x02\u01FB\x8A\x03\x02\x02\x02\u01FB\x94\x03\x02" +
		"\x02\x02\u01FB\x9E\x03\x02\x02\x02\u01FB\xA8\x03\x02\x02\x02\u01FB\xB2" +
		"\x03\x02\x02\x02\u01FB\xC3\x03\x02\x02\x02\u01FB\xD4\x03\x02\x02\x02\u01FB" +
		"\xE5\x03\x02\x02\x02\u01FB\xF6\x03\x02\x02\x02\u01FB\u0107\x03\x02\x02" +
		"\x02\u01FB\u0118\x03\x02\x02\x02\u01FB\u0129\x03\x02\x02\x02\u01FB\u013A" +
		"\x03\x02\x02\x02\u01FB\u0144\x03\x02\x02\x02\u01FB\u014E\x03\x02\x02\x02" +
		"\u01FB\u0158\x03\x02\x02\x02\u01FB\u0162\x03\x02\x02\x02\u01FB\u016C\x03" +
		"\x02\x02\x02\u01FB\u0176\x03\x02\x02\x02\u01FB\u0180\x03\x02\x02\x02\u01FB" +
		"\u018A\x03\x02\x02\x02\u01FB\u0194\x03\x02\x02\x02\u01FB\u019E\x03\x02" +
		"\x02\x02\u01FB\u01A8\x03\x02\x02\x02\u01FB\u01B2\x03\x02\x02\x02\u01FB" +
		"\u01BC\x03\x02\x02\x02\u01FB\u01C6\x03\x02\x02\x02\u01FB\u01D0\x03\x02" +
		"\x02\x02\u01FB\u01DA\x03\x02\x02\x02\u01FB\u01E4\x03\x02\x02\x02\u01FB" +
		"\u01EE\x03\x02\x02\x02\u01FB\u01F8\x03\x02\x02\x02\u01FB\u01F9\x03\x02" +
		"\x02\x02\u01FB\u01FA\x03\x02\x02\x02\u01FC\r\x03\x02\x02\x02\u01FD\u01FE" +
		"\x073\x02\x02\u01FE\x0F\x03\x02\x02\x02\u01FF\u0200\x074\x02\x02\u0200" +
		"\u0202\x07\xC3\x02\x02\u0201\u0203\x07\x03\x02\x02\u0202\u0201\x03\x02" +
		"\x02\x02\u0202\u0203\x03\x02\x02\x02\u0203\u0204\x03\x02\x02\x02\u0204" +
		"\u0206\x05&\x14\x02\u0205\u0207\x07\x03\x02\x02\u0206\u0205\x03\x02\x02" +
		"\x02\u0206\u0207\x03\x02\x02\x02\u0207\u0208\x03\x02\x02\x02\u0208\u0209" +
		"\x07\xC3\x02\x02\u0209\u0242\x03\x02\x02\x02\u020A\u020B\x075\x02\x02" +
		"\u020B\u020D\x07\xC3\x02\x02\u020C\u020E\x07\x03\x02\x02\u020D\u020C\x03" +
		"\x02\x02\x02\u020D\u020E\x03\x02\x02\x02\u020E\u020F\x03\x02\x02\x02\u020F" +
		"\u0211\x05&\x14\x02\u0210\u0212\x07\x03\x02\x02\u0211\u0210\x03\x02\x02" +
		"\x02\u0211\u0212\x03\x02\x02\x02\u0212\u0213\x03\x02\x02\x02\u0213\u0214" +
		"\x07\xC3\x02\x02\u0214\u0242\x03\x02\x02\x02\u0215\u0216\x076\x02\x02" +
		"\u0216\u0218\x07\xC3\x02\x02\u0217\u0219\x07\x03\x02\x02\u0218\u0217\x03" +
		"\x02\x02\x02\u0218\u0219\x03\x02\x02\x02\u0219\u021A\x03\x02\x02\x02\u021A" +
		"\u021C\x05&\x14\x02\u021B\u021D\x07\x03\x02\x02\u021C\u021B\x03\x02\x02" +
		"\x02\u021C\u021D\x03\x02\x02\x02\u021D\u021E\x03\x02\x02\x02\u021E\u021F" +
		"\x07\xC3\x02\x02\u021F\u0242\x03\x02\x02\x02\u0220\u0221\x077\x02\x02" +
		"\u0221\u0223\x07\xC3\x02\x02\u0222\u0224\x07\x03\x02\x02\u0223\u0222\x03" +
		"\x02\x02\x02\u0223\u0224\x03\x02\x02\x02\u0224\u0225\x03\x02\x02\x02\u0225" +
		"\u0227\x05&\x14\x02\u0226\u0228\x07\x03\x02\x02\u0227\u0226\x03\x02\x02" +
		"\x02\u0227\u0228\x03\x02\x02\x02\u0228\u0229\x03\x02\x02\x02\u0229\u022A" +
		"\x07\xC6\x02\x02\u022A\u0242\x03\x02\x02\x02\u022B\u022C\x078\x02\x02" +
		"\u022C\u022E\x07\xC3\x02\x02\u022D\u022F\x07\x03\x02\x02\u022E\u022D\x03" +
		"\x02\x02\x02\u022E\u022F\x03\x02\x02\x02\u022F\u0230\x03\x02\x02\x02\u0230" +
		"\u0232\x05&\x14\x02\u0231\u0233\x07\x03\x02\x02\u0232\u0231\x03\x02\x02" +
		"\x02\u0232\u0233\x03\x02\x02\x02\u0233\u0234\x03\x02\x02\x02\u0234\u0235" +
		"\x07\xC6\x02\x02\u0235\u0242\x03\x02\x02\x02\u0236\u0237\x079\x02\x02" +
		"\u0237\u0239\x07\xC3\x02\x02\u0238\u023A\x07\x03\x02\x02\u0239\u0238\x03" +
		"\x02\x02\x02\u0239\u023A\x03\x02\x02\x02\u023A\u023B\x03\x02\x02\x02\u023B" +
		"\u023D\x05&\x14\x02\u023C\u023E\x07\x03\x02\x02\u023D\u023C\x03\x02\x02" +
		"\x02\u023D\u023E\x03\x02\x02\x02\u023E\u023F\x03\x02\x02\x02\u023F\u0240" +
		"\x07\xC6\x02\x02\u0240\u0242\x03\x02\x02\x02\u0241\u01FF\x03\x02\x02\x02" +
		"\u0241\u020A\x03\x02\x02\x02\u0241\u0215\x03\x02\x02\x02\u0241\u0220\x03" +
		"\x02\x02\x02\u0241\u022B\x03\x02\x02\x02\u0241\u0236\x03\x02\x02\x02\u0242" +
		"\x11\x03\x02\x02\x02\u0243\u0244\x07:\x02\x02\u0244\u0246\x07\xC3\x02" +
		"\x02\u0245\u0247\x07\x03\x02\x02\u0246\u0245\x03\x02\x02\x02\u0246\u0247" +
		"\x03\x02\x02\x02\u0247\u0248\x03\x02\x02\x02\u0248\u024A\x07\xC3\x02\x02" +
		"\u0249\u024B\x07\x03\x02\x02\u024A\u0249\x03\x02\x02\x02\u024A\u024B\x03" +
		"\x02\x02\x02\u024B\u024C\x03\x02\x02\x02\u024C\u0294\x07\xC3\x02\x02\u024D" +
		"\u024E\x07;\x02\x02\u024E\u0250\x07\xC3\x02\x02\u024F\u0251\x07\x03\x02" +
		"\x02\u0250\u024F\x03\x02\x02\x02\u0250\u0251\x03\x02\x02\x02\u0251\u0252" +
		"\x03\x02\x02\x02\u0252\u0254\x07\xC3\x02\x02\u0253\u0255\x07\x03\x02\x02" +
		"\u0254\u0253\x03\x02\x02\x02\u0254\u0255\x03\x02\x02\x02\u0255\u0256\x03" +
		"\x02\x02\x02\u0256\u0294\x07\xC3\x02\x02\u0257\u0258\x07<\x02\x02\u0258" +
		"\u025A\x07\xC3\x02\x02\u0259\u025B\x07\x03\x02\x02\u025A\u0259\x03\x02" +
		"\x02\x02\u025A\u025B\x03\x02\x02\x02\u025B\u025C\x03\x02\x02\x02\u025C" +
		"\u025E\x07\xC3\x02\x02\u025D\u025F\x07\x03\x02\x02\u025E\u025D\x03\x02" +
		"\x02\x02\u025E\u025F\x03\x02\x02\x02\u025F\u0260\x03\x02\x02\x02\u0260" +
		"\u0294\x07\xC3\x02\x02\u0261\u0262\x07=\x02\x02\u0262\u0264\x07\xC3\x02" +
		"\x02\u0263\u0265\x07\x03\x02\x02\u0264\u0263\x03\x02\x02\x02\u0264\u0265" +
		"\x03\x02\x02\x02\u0265\u0266\x03\x02\x02\x02\u0266\u0268\x07\xC3\x02\x02" +
		"\u0267\u0269\x07\x03\x02\x02\u0268\u0267\x03\x02\x02\x02\u0268\u0269\x03" +
		"\x02\x02\x02\u0269\u026A\x03\x02\x02\x02\u026A\u0294\x07\xC3\x02\x02\u026B" +
		"\u026C\x07>\x02\x02\u026C\u026E\x07\xC3\x02\x02\u026D\u026F\x07\x03\x02" +
		"\x02\u026E\u026D\x03\x02\x02\x02\u026E\u026F\x03\x02\x02\x02\u026F\u0270" +
		"\x03\x02\x02\x02\u0270\u0272\x07\xC3\x02\x02\u0271\u0273\x07\x03\x02\x02" +
		"\u0272\u0271\x03\x02\x02\x02\u0272\u0273\x03\x02\x02\x02\u0273\u0274\x03" +
		"\x02\x02\x02\u0274\u0294\x07\xC3\x02\x02\u0275\u0276\x07?\x02\x02\u0276" +
		"\u0278\x07\xC3\x02\x02\u0277\u0279\x07\x03\x02\x02\u0278\u0277\x03\x02" +
		"\x02\x02\u0278\u0279\x03\x02\x02\x02\u0279\u027A\x03\x02\x02\x02\u027A" +
		"\u027C\x07\xC3\x02\x02\u027B\u027D\x07\x03\x02\x02\u027C\u027B\x03\x02" +
		"\x02\x02\u027C\u027D\x03\x02\x02\x02\u027D\u027E\x03\x02\x02\x02\u027E" +
		"\u0294\x07\xC3\x02\x02\u027F\u0280\x07@\x02\x02\u0280\u0282\x07\xC3\x02" +
		"\x02\u0281\u0283\x07\x03\x02\x02\u0282\u0281\x03\x02\x02\x02\u0282\u0283" +
		"\x03\x02\x02\x02\u0283\u0284\x03\x02\x02\x02\u0284\u0286\x07\xC3\x02\x02" +
		"\u0285\u0287\x07\x03\x02\x02\u0286\u0285\x03\x02\x02\x02\u0286\u0287\x03" +
		"\x02\x02\x02\u0287\u0288\x03\x02\x02\x02\u0288\u0294\x07\xC3\x02\x02\u0289" +
		"\u028A\x07A\x02\x02\u028A\u028C\x07\xC3\x02\x02\u028B\u028D\x07\x03\x02" +
		"\x02\u028C\u028B\x03\x02\x02\x02\u028C\u028D\x03\x02\x02\x02\u028D\u028E" +
		"\x03\x02\x02\x02\u028E\u0290\x07\xC3\x02\x02\u028F\u0291\x07\x03\x02\x02" +
		"\u0290\u028F\x03\x02\x02\x02\u0290\u0291\x03\x02\x02\x02\u0291\u0292\x03" +
		"\x02\x02\x02\u0292\u0294\x07\xC3\x02\x02\u0293\u0243\x03\x02\x02\x02\u0293" +
		"\u024D\x03\x02\x02\x02\u0293\u0257\x03\x02\x02\x02\u0293\u0261\x03\x02" +
		"\x02\x02\u0293\u026B\x03\x02\x02\x02\u0293\u0275\x03\x02\x02\x02\u0293" +
		"\u027F\x03\x02\x02\x02\u0293\u0289\x03\x02\x02\x02\u0294\x13\x03\x02\x02" +
		"\x02\u0295\u0296\x07B\x02\x02\u0296\u0298\x07\xC3\x02\x02\u0297\u0299" +
		"\x07\x03\x02\x02\u0298\u0297\x03\x02\x02\x02\u0298\u0299\x03\x02\x02\x02" +
		"\u0299\u029B\x03\x02\x02\x02\u029A\u029C\x07\x04\x02\x02\u029B\u029A\x03" +
		"\x02\x02\x02\u029B\u029C\x03\x02\x02\x02\u029C\u029D\x03\x02\x02\x02\u029D" +
		"\u029F\x07\xC3\x02\x02\u029E\u02A0\x07\x05\x02\x02\u029F\u029E\x03\x02" +
		"\x02\x02\u029F\u02A0\x03\x02\x02\x02\u02A0\u0342\x03\x02\x02\x02\u02A1" +
		"\u02A2\x07C\x02\x02\u02A2\u02A4\x07\xC3\x02\x02\u02A3\u02A5\x07\x03\x02" +
		"\x02\u02A4\u02A3\x03\x02\x02\x02\u02A4\u02A5\x03\x02\x02\x02\u02A5\u02A6" +
		"\x03\x02\x02\x02\u02A6\u02A8\x07\xC3\x02\x02\u02A7\u02A9\x07\x03\x02\x02" +
		"\u02A8\u02A7\x03\x02\x02\x02\u02A8\u02A9\x03\x02\x02\x02\u02A9\u02AB\x03" +
		"\x02\x02\x02\u02AA\u02AC\x07\x04\x02\x02\u02AB\u02AA\x03\x02\x02\x02\u02AB" +
		"\u02AC\x03\x02\x02\x02\u02AC\u02AD\x03\x02\x02\x02\u02AD\u02AF\x07\xC3" +
		"\x02\x02\u02AE\u02B0\x07\x05\x02\x02\u02AF\u02AE\x03\x02\x02\x02\u02AF" +
		"\u02B0\x03\x02\x02\x02\u02B0\u0342\x03\x02\x02\x02\u02B1\u02B2\x07D\x02" +
		"\x02\u02B2\u02B4\x07\xC3\x02\x02\u02B3\u02B5\x07\x03\x02\x02\u02B4\u02B3" +
		"\x03\x02\x02\x02\u02B4\u02B5\x03\x02\x02\x02\u02B5\u02B6\x03\x02\x02\x02" +
		"\u02B6\u02B8\x07\xC3\x02\x02\u02B7\u02B9\x07\x03\x02\x02\u02B8\u02B7\x03" +
		"\x02\x02\x02\u02B8\u02B9\x03\x02\x02\x02\u02B9\u02BB\x03\x02\x02\x02\u02BA" +
		"\u02BC\x07\x04\x02\x02\u02BB\u02BA\x03\x02\x02\x02\u02BB\u02BC\x03\x02" +
		"\x02\x02\u02BC\u02BD\x03\x02\x02\x02\u02BD\u02BF\x07\xC3\x02\x02\u02BE" +
		"\u02C0\x07\x05\x02\x02\u02BF\u02BE\x03\x02\x02\x02\u02BF\u02C0\x03\x02" +
		"\x02\x02\u02C0\u0342\x03\x02\x02\x02\u02C1\u02C2\x07E\x02\x02\u02C2\u02C4" +
		"\x07\xC3\x02\x02\u02C3\u02C5\x07\x03\x02\x02\u02C4\u02C3\x03\x02\x02\x02" +
		"\u02C4\u02C5\x03\x02\x02\x02\u02C5\u02C6\x03\x02\x02\x02\u02C6\u02C8\x07" +
		"\xC3\x02\x02\u02C7\u02C9\x07\x03\x02\x02\u02C8\u02C7\x03\x02\x02\x02\u02C8" +
		"\u02C9\x03\x02\x02\x02\u02C9\u02CB\x03\x02\x02\x02\u02CA\u02CC\x07\x04" +
		"\x02\x02\u02CB\u02CA\x03\x02\x02\x02\u02CB\u02CC\x03\x02\x02\x02\u02CC" +
		"\u02CD\x03\x02\x02\x02\u02CD\u02CF\x07\xC3\x02\x02\u02CE\u02D0\x07\x05" +
		"\x02\x02\u02CF\u02CE\x03\x02\x02\x02\u02CF\u02D0\x03\x02\x02\x02\u02D0" +
		"\u0342\x03\x02\x02\x02\u02D1\u02D2\x07F\x02\x02\u02D2\u02D4\x07\xC3\x02" +
		"\x02\u02D3\u02D5\x07\x03\x02\x02\u02D4\u02D3\x03\x02\x02\x02\u02D4\u02D5" +
		"\x03\x02\x02\x02\u02D5\u02D6\x03\x02\x02\x02\u02D6\u02D8\x07\xC3\x02\x02" +
		"\u02D7\u02D9\x07\x03\x02\x02\u02D8\u02D7\x03\x02\x02\x02\u02D8\u02D9\x03" +
		"\x02\x02\x02\u02D9\u02DB\x03\x02\x02\x02\u02DA\u02DC\x07\x04\x02\x02\u02DB" +
		"\u02DA\x03\x02\x02\x02\u02DB\u02DC\x03\x02\x02\x02\u02DC\u02DD\x03\x02" +
		"\x02\x02\u02DD\u02DF\x07\xC3\x02\x02\u02DE\u02E0\x07\x05\x02\x02\u02DF" +
		"\u02DE\x03\x02\x02\x02\u02DF\u02E0\x03\x02\x02\x02\u02E0\u0342\x03\x02" +
		"\x02\x02\u02E1\u02E2\x07G\x02\x02\u02E2\u02E4\x07\xC3\x02\x02\u02E3\u02E5" +
		"\x07\x03\x02\x02\u02E4\u02E3\x03\x02\x02\x02\u02E4\u02E5\x03\x02\x02\x02" +
		"\u02E5\u02E6\x03\x02\x02\x02\u02E6\u02E8\x07\xC3\x02\x02\u02E7\u02E9\x07" +
		"\x03\x02\x02\u02E8\u02E7\x03\x02\x02\x02\u02E8\u02E9\x03\x02\x02\x02\u02E9" +
		"\u02EB\x03\x02\x02\x02\u02EA\u02EC\x07\x04\x02\x02\u02EB\u02EA\x03\x02" +
		"\x02\x02\u02EB\u02EC\x03\x02\x02\x02\u02EC\u02ED\x03\x02\x02\x02\u02ED" +
		"\u02EF\x07\xC3\x02\x02\u02EE\u02F0\x07\x05\x02\x02\u02EF\u02EE\x03\x02" +
		"\x02\x02\u02EF\u02F0\x03\x02\x02\x02\u02F0\u0342\x03\x02\x02\x02\u02F1" +
		"\u02F2\x07H\x02\x02\u02F2\u02F4\x07\xC3\x02\x02\u02F3\u02F5\x07\x03\x02" +
		"\x02\u02F4\u02F3\x03\x02\x02\x02\u02F4\u02F5\x03\x02\x02\x02\u02F5\u02F6" +
		"\x03\x02\x02\x02\u02F6\u02F8\x07\xC3\x02\x02\u02F7\u02F9\x07\x03\x02\x02" +
		"\u02F8\u02F7\x03\x02\x02\x02\u02F8\u02F9\x03\x02\x02\x02\u02F9\u02FB\x03" +
		"\x02\x02\x02\u02FA\u02FC\x07\x04\x02\x02\u02FB\u02FA\x03\x02\x02\x02\u02FB" +
		"\u02FC\x03\x02\x02\x02\u02FC\u02FD\x03\x02\x02\x02\u02FD\u02FF\x07\xC3" +
		"\x02\x02\u02FE\u0300\x07\x05\x02\x02\u02FF\u02FE\x03\x02\x02\x02\u02FF" +
		"\u0300\x03\x02\x02\x02\u0300\u0342\x03\x02\x02\x02\u0301\u0302\x07I\x02" +
		"\x02\u0302\u0304\x07\xC3\x02\x02\u0303\u0305\x07\x03\x02\x02\u0304\u0303" +
		"\x03\x02\x02\x02\u0304\u0305\x03\x02\x02\x02\u0305\u0306\x03\x02\x02\x02" +
		"\u0306\u0308\x07\xC3\x02\x02\u0307\u0309\x07\x03\x02\x02\u0308\u0307\x03" +
		"\x02\x02\x02\u0308\u0309\x03\x02\x02\x02\u0309\u030B\x03\x02\x02\x02\u030A" +
		"\u030C\x07\x04\x02\x02\u030B\u030A\x03\x02\x02\x02\u030B\u030C\x03\x02" +
		"\x02\x02\u030C\u030D\x03\x02\x02\x02\u030D\u030F\x07\xC3\x02\x02\u030E" +
		"\u0310\x07\x05\x02\x02\u030F\u030E\x03\x02\x02";
	private static readonly _serializedATNSegment2: string =
		"\x02\u030F\u0310\x03\x02\x02\x02\u0310\u0342\x03\x02\x02\x02\u0311\u0312" +
		"\x07J\x02\x02\u0312\u0314\x07\xC3\x02\x02\u0313\u0315\x07\x03\x02\x02" +
		"\u0314\u0313\x03\x02\x02\x02\u0314\u0315\x03\x02\x02\x02\u0315\u0316\x03" +
		"\x02\x02\x02\u0316\u0318\x07\xC3\x02\x02\u0317\u0319\x07\x03\x02\x02\u0318" +
		"\u0317\x03\x02\x02\x02\u0318\u0319\x03\x02\x02\x02\u0319\u031B\x03\x02" +
		"\x02\x02\u031A\u031C\x07\x04\x02\x02\u031B\u031A\x03\x02\x02\x02\u031B" +
		"\u031C\x03\x02\x02\x02\u031C\u031D\x03\x02\x02\x02\u031D\u031F\x07\xC3" +
		"\x02\x02\u031E\u0320\x07\x05\x02\x02\u031F\u031E\x03\x02\x02\x02\u031F" +
		"\u0320\x03\x02\x02\x02\u0320\u0342\x03\x02\x02\x02\u0321\u0322\x07K\x02" +
		"\x02\u0322\u0324\x07\xC3\x02\x02\u0323\u0325\x07\x03\x02\x02\u0324\u0323" +
		"\x03\x02\x02\x02\u0324\u0325\x03\x02\x02\x02\u0325\u0326\x03\x02\x02\x02" +
		"\u0326\u0328\x07\xC3\x02\x02\u0327\u0329\x07\x03\x02\x02\u0328\u0327\x03" +
		"\x02\x02\x02\u0328\u0329\x03\x02\x02\x02\u0329\u032B\x03\x02\x02\x02\u032A" +
		"\u032C\x07\x04\x02\x02\u032B\u032A\x03\x02\x02\x02\u032B\u032C\x03\x02" +
		"\x02\x02\u032C\u032D\x03\x02\x02\x02\u032D\u032F\x07\xC3\x02\x02\u032E" +
		"\u0330\x07\x05\x02\x02\u032F\u032E\x03\x02\x02\x02\u032F\u0330\x03\x02" +
		"\x02\x02\u0330\u0342\x03\x02\x02\x02\u0331\u0332\x07L\x02\x02\u0332\u0334" +
		"\x07\xC3\x02\x02\u0333\u0335\x07\x03\x02\x02\u0334\u0333\x03\x02\x02\x02" +
		"\u0334\u0335\x03\x02\x02\x02\u0335\u0336\x03\x02\x02\x02\u0336\u0338\x07" +
		"\xC3\x02\x02\u0337\u0339\x07\x03\x02\x02\u0338\u0337\x03\x02\x02\x02\u0338" +
		"\u0339\x03\x02\x02\x02\u0339\u033B\x03\x02\x02\x02\u033A\u033C\x07\x04" +
		"\x02\x02\u033B\u033A\x03\x02\x02\x02\u033B\u033C\x03\x02\x02\x02\u033C" +
		"\u033D\x03\x02\x02\x02\u033D\u033F\x07\xC3\x02\x02\u033E\u0340\x07\x05" +
		"\x02\x02\u033F\u033E\x03\x02\x02\x02\u033F\u0340\x03\x02\x02\x02\u0340" +
		"\u0342\x03\x02\x02\x02\u0341\u0295\x03\x02\x02\x02\u0341\u02A1\x03\x02" +
		"\x02\x02\u0341\u02B1\x03\x02\x02\x02\u0341\u02C1\x03\x02\x02\x02\u0341" +
		"\u02D1\x03\x02\x02\x02\u0341\u02E1\x03\x02\x02\x02\u0341\u02F1\x03\x02" +
		"\x02\x02\u0341\u0301\x03\x02\x02\x02\u0341\u0311\x03\x02\x02\x02\u0341" +
		"\u0321\x03\x02\x02\x02\u0341\u0331\x03\x02\x02\x02\u0342\x15\x03\x02\x02" +
		"\x02\u0343\u0344\x07M\x02\x02\u0344\u0346\x07\xC4\x02\x02\u0345\u0347" +
		"\x07\x03\x02\x02\u0346\u0345\x03\x02\x02\x02\u0346\u0347\x03\x02\x02\x02" +
		"\u0347\u0352\x03\x02\x02\x02\u0348\u034A\x07\xC3\x02\x02\u0349\u034B\x07" +
		"\x03\x02\x02\u034A\u0349\x03\x02\x02\x02\u034A\u034B\x03\x02\x02\x02\u034B" +
		"\u034C\x03\x02\x02\x02\u034C\u0353\x05&\x14\x02\u034D\u034E\x05&\x14\x02" +
		"\u034E\u034F\x07\x04\x02\x02\u034F\u0350\x07\xC3\x02\x02\u0350\u0351\x07" +
		"\x05\x02\x02\u0351\u0353\x03\x02\x02\x02\u0352\u0348\x03\x02\x02\x02\u0352" +
		"\u034D\x03\x02\x02\x02\u0353\u0456\x03\x02\x02\x02\u0354\u0367\x07N\x02" +
		"\x02\u0355\u0357\x07\xC3\x02\x02\u0356\u0358\x07\x03\x02\x02\u0357\u0356" +
		"\x03\x02\x02\x02\u0357\u0358\x03\x02\x02\x02\u0358\u0359\x03\x02\x02\x02" +
		"\u0359\u035B\x07\xC4\x02\x02\u035A\u035C\x07\x03\x02\x02\u035B\u035A\x03" +
		"\x02\x02\x02\u035B\u035C\x03\x02\x02\x02\u035C\u035D\x03\x02\x02\x02\u035D" +
		"\u0368\x05&\x14\x02\u035E\u0360\x07\xC4\x02\x02\u035F\u0361\x07\x03\x02" +
		"\x02\u0360\u035F\x03\x02\x02\x02\u0360\u0361\x03\x02\x02\x02\u0361\u0362" +
		"\x03\x02\x02\x02\u0362\u0363\x05&\x14\x02\u0363\u0364\x07\x04\x02\x02" +
		"\u0364\u0365\x07\xC3\x02\x02\u0365\u0366\x07\x05\x02\x02\u0366\u0368\x03" +
		"\x02\x02\x02\u0367\u0355\x03\x02\x02\x02\u0367\u035E\x03\x02\x02\x02\u0368" +
		"\u0456\x03\x02\x02\x02\u0369\u036A\x07O\x02\x02\u036A\u036C\x07\xC4\x02" +
		"\x02\u036B\u036D\x07\x03\x02\x02\u036C\u036B\x03\x02\x02\x02\u036C\u036D" +
		"\x03\x02\x02\x02\u036D\u036E\x03\x02\x02\x02\u036E\u0370\x07\xC4\x02\x02" +
		"\u036F\u0371\x07\x03\x02\x02\u0370\u036F\x03\x02\x02\x02\u0370\u0371\x03" +
		"\x02\x02\x02\u0371\u0372\x03\x02\x02\x02\u0372\u0374\x07\xC4\x02\x02\u0373" +
		"\u0375\x07\x03\x02\x02\u0374\u0373\x03\x02\x02\x02\u0374\u0375\x03\x02" +
		"\x02\x02\u0375\u0376\x03\x02\x02\x02\u0376\u0456\x07\xC4\x02\x02\u0377" +
		"\u0378\x07P\x02\x02\u0378\u037A\x07\xC4\x02\x02\u0379\u037B\x07\x03\x02" +
		"\x02\u037A\u0379\x03\x02\x02\x02\u037A\u037B\x03\x02\x02\x02\u037B\u037C" +
		"\x03\x02\x02\x02\u037C\u037E\x07\xC4\x02\x02\u037D\u037F\x07\x03\x02\x02" +
		"\u037E\u037D\x03\x02\x02\x02\u037E\u037F\x03\x02\x02\x02\u037F\u0380\x03" +
		"\x02\x02\x02\u0380\u0382\x07\xC4\x02\x02\u0381\u0383\x07\x03\x02\x02\u0382" +
		"\u0381\x03\x02\x02\x02\u0382\u0383\x03\x02\x02\x02\u0383\u0384\x03\x02" +
		"\x02\x02\u0384\u0456\x07\xC4\x02\x02\u0385\u0386\x07Q\x02\x02\u0386\u0388" +
		"\x07\xC4\x02\x02\u0387\u0389\x07\x03\x02\x02\u0388\u0387\x03\x02\x02\x02" +
		"\u0388\u0389\x03\x02\x02\x02\u0389\u038A\x03\x02\x02\x02\u038A\u038C\x07" +
		"\xC4\x02\x02\u038B\u038D\x07\x03\x02\x02\u038C\u038B\x03\x02\x02\x02\u038C" +
		"\u038D\x03\x02\x02\x02\u038D\u038E\x03\x02\x02\x02\u038E\u0390\x07\xC4" +
		"\x02\x02\u038F\u0391\x07\x03\x02\x02\u0390\u038F\x03\x02\x02\x02\u0390" +
		"\u0391\x03\x02\x02\x02\u0391\u0392\x03\x02\x02\x02\u0392\u0456\x07\xC4" +
		"\x02\x02\u0393\u0394\x07R\x02\x02\u0394\u0396\x07\xC4\x02\x02\u0395\u0397" +
		"\x07\x03\x02\x02\u0396\u0395\x03\x02\x02\x02\u0396\u0397\x03\x02\x02\x02" +
		"\u0397\u0398\x03\x02\x02\x02\u0398\u039A\x07\xC4\x02\x02\u0399\u039B\x07" +
		"\x03\x02\x02\u039A\u0399\x03\x02\x02\x02\u039A\u039B\x03\x02\x02\x02\u039B" +
		"\u039C\x03\x02\x02\x02\u039C\u039E\x07\xC4\x02\x02\u039D\u039F\x07\x03" +
		"\x02\x02\u039E\u039D\x03\x02\x02\x02\u039E\u039F\x03\x02\x02\x02\u039F" +
		"\u03A0\x03\x02\x02\x02\u03A0\u0456\x07\xC4\x02\x02\u03A1\u03A2\x07S\x02" +
		"\x02\u03A2\u03A4\x07\xC4\x02\x02\u03A3\u03A5\x07\x03\x02\x02\u03A4\u03A3" +
		"\x03\x02\x02\x02\u03A4\u03A5\x03\x02\x02\x02\u03A5\u03A6\x03\x02\x02\x02" +
		"\u03A6\u03A8\x07\xC4\x02\x02\u03A7\u03A9\x07\x03\x02\x02\u03A8\u03A7\x03" +
		"\x02\x02\x02\u03A8\u03A9\x03\x02\x02\x02\u03A9\u03AA\x03\x02\x02\x02\u03AA" +
		"\u0456\x07\xC4\x02\x02\u03AB\u03AC\x07T\x02\x02\u03AC\u03AE\x07\xC4\x02" +
		"\x02\u03AD\u03AF\x07\x03\x02\x02\u03AE\u03AD\x03\x02\x02\x02\u03AE\u03AF" +
		"\x03\x02\x02\x02\u03AF\u03B0\x03\x02\x02\x02\u03B0\u03B2\x07\xC4\x02\x02" +
		"\u03B1\u03B3\x07\x03\x02\x02\u03B2\u03B1\x03\x02\x02\x02\u03B2\u03B3\x03" +
		"\x02\x02\x02\u03B3\u03B4\x03\x02\x02\x02\u03B4\u0456\x07\xC4\x02\x02\u03B5" +
		"\u03B6\x07U\x02\x02\u03B6\u03B8\x07\xC4\x02\x02\u03B7\u03B9\x07\x03\x02" +
		"\x02\u03B8\u03B7\x03\x02\x02\x02\u03B8\u03B9\x03\x02\x02\x02\u03B9\u03BA" +
		"\x03\x02\x02\x02\u03BA\u03BC\x07\xC4\x02\x02\u03BB\u03BD\x07\x03\x02\x02" +
		"\u03BC\u03BB\x03\x02\x02\x02\u03BC\u03BD\x03\x02\x02\x02\u03BD\u03BE\x03" +
		"\x02\x02\x02\u03BE\u0456\x07\xC4\x02\x02\u03BF\u03C0\x07V\x02\x02\u03C0" +
		"\u03C2\x07\xC4\x02\x02\u03C1\u03C3\x07\x03\x02\x02\u03C2\u03C1\x03\x02" +
		"\x02\x02\u03C2\u03C3\x03\x02\x02\x02\u03C3\u03C4\x03\x02\x02\x02\u03C4" +
		"\u03C6\x07\xC4\x02\x02\u03C5\u03C7\x07\x03\x02\x02\u03C6\u03C5\x03\x02" +
		"\x02\x02\u03C6\u03C7\x03\x02\x02\x02\u03C7\u03C8\x03\x02\x02\x02\u03C8" +
		"\u0456\x07\xC4\x02\x02\u03C9\u03CA\x07W\x02\x02\u03CA\u03CC\x07\xC4\x02" +
		"\x02\u03CB\u03CD\x07\x03\x02\x02\u03CC\u03CB\x03\x02\x02\x02\u03CC\u03CD" +
		"\x03\x02\x02\x02\u03CD\u03CE\x03\x02\x02\x02\u03CE\u0456\x07\xC4\x02\x02" +
		"\u03CF\u03D0\x07X\x02\x02\u03D0\u03D2\x07\xC4\x02\x02\u03D1\u03D3\x07" +
		"\x03\x02\x02\u03D2\u03D1\x03\x02\x02\x02\u03D2\u03D3\x03\x02\x02\x02\u03D3" +
		"\u03D4\x03\x02\x02\x02\u03D4\u03D6\x07\xC4\x02\x02\u03D5\u03D7\x07\x03" +
		"\x02\x02\u03D6\u03D5\x03\x02\x02\x02\u03D6\u03D7\x03\x02\x02\x02\u03D7" +
		"\u03D8\x03\x02\x02\x02\u03D8\u0456\x07\xC4\x02\x02\u03D9\u03DA\x07Y\x02" +
		"\x02\u03DA\u03DC\x07\xC4\x02\x02\u03DB\u03DD\x07\x03\x02\x02\u03DC\u03DB" +
		"\x03\x02\x02\x02\u03DC\u03DD\x03\x02\x02\x02\u03DD\u03DE\x03\x02\x02\x02" +
		"\u03DE\u03E0\x07\xC4\x02\x02\u03DF\u03E1\x07\x03\x02\x02\u03E0\u03DF\x03" +
		"\x02\x02\x02\u03E0\u03E1\x03\x02\x02\x02\u03E1\u03E2\x03\x02\x02\x02\u03E2" +
		"\u0456\x07\xC4\x02\x02\u03E3\u03E4\x07Z\x02\x02\u03E4\u03E6\x07\xC4\x02" +
		"\x02\u03E5\u03E7\x07\x03\x02\x02\u03E6\u03E5\x03\x02\x02\x02\u03E6\u03E7" +
		"\x03\x02\x02\x02\u03E7\u03E8\x03\x02\x02\x02\u03E8\u03EA\x07\xC4\x02\x02" +
		"\u03E9\u03EB\x07\x03\x02\x02\u03EA\u03E9\x03\x02\x02\x02\u03EA\u03EB\x03" +
		"\x02\x02\x02\u03EB\u03EC\x03\x02\x02\x02\u03EC\u0456\x07\xC4\x02\x02\u03ED" +
		"\u03EE\x07[\x02\x02\u03EE\u03F0\x07\xC4\x02\x02\u03EF\u03F1\x07\x03\x02" +
		"\x02\u03F0\u03EF\x03\x02\x02\x02\u03F0\u03F1\x03\x02\x02\x02\u03F1\u03F2" +
		"\x03\x02\x02\x02\u03F2\u03F4\x07\xC4\x02\x02\u03F3\u03F5\x07\x03\x02\x02" +
		"\u03F4\u03F3\x03\x02\x02\x02\u03F4\u03F5\x03\x02\x02\x02\u03F5\u03F6\x03" +
		"\x02\x02\x02\u03F6\u0456\x07\xC4\x02\x02\u03F7\u03F8\x07\\\x02\x02\u03F8" +
		"\u03FA\x07\xC4\x02\x02\u03F9\u03FB\x07\x03\x02\x02\u03FA\u03F9\x03\x02" +
		"\x02\x02\u03FA\u03FB\x03\x02\x02\x02\u03FB\u03FC\x03\x02\x02\x02\u03FC" +
		"\u03FE\x07\xC4\x02\x02\u03FD\u03FF\x07\x03\x02\x02\u03FE\u03FD\x03\x02" +
		"\x02\x02\u03FE\u03FF\x03\x02\x02\x02\u03FF\u0400\x03\x02\x02\x02\u0400" +
		"\u0456\x07\xC4\x02\x02\u0401\u0402\x07]\x02\x02\u0402\u0404\x07\xC3\x02" +
		"\x02\u0403\u0405\x07\x03\x02\x02\u0404\u0403\x03\x02\x02\x02\u0404\u0405" +
		"\x03\x02\x02\x02\u0405\u0406\x03\x02\x02\x02\u0406\u0456\x07\xC4\x02\x02" +
		"\u0407\u0408\x07^\x02\x02\u0408\u040A\x07\xC3\x02\x02\u0409\u040B\x07" +
		"\x03\x02\x02\u040A\u0409\x03\x02\x02\x02\u040A\u040B\x03\x02\x02\x02\u040B" +
		"\u040C\x03\x02\x02\x02\u040C\u0456\x07\xC4\x02\x02\u040D\u040E\x07_\x02" +
		"\x02\u040E\u0410\x07\xC3\x02\x02\u040F\u0411\x07\x03\x02\x02\u0410\u040F" +
		"\x03\x02\x02\x02\u0410\u0411\x03\x02\x02\x02\u0411\u0412\x03\x02\x02\x02" +
		"\u0412\u0456\x07\xC4\x02\x02\u0413\u0414\x07`\x02\x02\u0414\u0416\x07" +
		"\xC3\x02\x02\u0415\u0417\x07\x03\x02\x02\u0416\u0415\x03\x02\x02\x02\u0416" +
		"\u0417\x03\x02\x02\x02\u0417\u0418\x03\x02\x02\x02\u0418\u0456\x07\xC4" +
		"\x02\x02\u0419\u041A\x07a\x02\x02\u041A\u041C\x07\xC3\x02\x02\u041B\u041D" +
		"\x07\x03\x02\x02\u041C\u041B\x03\x02\x02\x02\u041C\u041D\x03\x02\x02\x02" +
		"\u041D\u041E\x03\x02\x02\x02\u041E\u0420\x07\xC4\x02\x02\u041F\u0421\x07" +
		"\x03\x02\x02\u0420\u041F\x03\x02\x02\x02\u0420\u0421\x03\x02\x02\x02\u0421" +
		"\u0422\x03\x02\x02\x02\u0422\u0456\x07\xC4\x02\x02\u0423\u0424\x07b\x02" +
		"\x02\u0424\u0426\x07\xC3\x02\x02\u0425\u0427\x07\x03\x02\x02\u0426\u0425" +
		"\x03\x02\x02\x02\u0426\u0427\x03\x02\x02\x02\u0427\u0428\x03\x02\x02\x02" +
		"\u0428\u042A\x07\xC4\x02\x02\u0429\u042B\x07\x03\x02\x02\u042A\u0429\x03" +
		"\x02\x02\x02\u042A\u042B\x03\x02\x02\x02\u042B\u042C\x03\x02\x02\x02\u042C" +
		"\u0456\x07\xC4\x02\x02\u042D\u042E\x07c\x02\x02\u042E\u0430\x07\xC3\x02" +
		"\x02\u042F\u0431\x07\x03\x02\x02\u0430\u042F\x03\x02\x02\x02\u0430\u0431" +
		"\x03\x02\x02\x02\u0431\u0432\x03\x02\x02\x02\u0432\u0434\x07\xC4\x02\x02" +
		"\u0433\u0435\x07\x03\x02\x02\u0434\u0433\x03\x02\x02\x02\u0434\u0435\x03" +
		"\x02\x02\x02\u0435\u0436\x03\x02\x02\x02\u0436\u0456\x07\xC4\x02\x02\u0437" +
		"\u0438\x07d\x02\x02\u0438\u043A\x07\xC3\x02\x02\u0439\u043B\x07\x03\x02" +
		"\x02\u043A\u0439\x03\x02\x02\x02\u043A\u043B\x03\x02\x02\x02\u043B\u043C" +
		"\x03\x02\x02\x02\u043C\u0456\x07\xC4\x02\x02\u043D\u043E\x07e\x02\x02" +
		"\u043E\u0440\x07\xC4\x02\x02\u043F\u0441\x07\x03\x02\x02\u0440\u043F\x03" +
		"\x02\x02\x02\u0440\u0441\x03\x02\x02\x02\u0441\u0442\x03\x02\x02\x02\u0442" +
		"\u0456\x07\xC3\x02\x02\u0443\u0444\x07f\x02\x02\u0444\u0446\x07\xC4\x02" +
		"\x02\u0445\u0447\x07\x03\x02\x02\u0446\u0445\x03\x02\x02\x02\u0446\u0447" +
		"\x03\x02\x02\x02\u0447\u0448\x03\x02\x02\x02\u0448\u0456\x07\xC3\x02\x02" +
		"\u0449\u044A\x07g\x02\x02\u044A\u044C\x07\xC4\x02\x02\u044B\u044D\x07" +
		"\x03\x02\x02\u044C\u044B\x03\x02\x02\x02\u044C\u044D\x03\x02\x02\x02\u044D" +
		"\u044E\x03\x02\x02\x02\u044E\u0456\x07\xC3\x02\x02\u044F\u0450\x07h\x02" +
		"\x02\u0450\u0452\x07\xC4\x02\x02\u0451\u0453\x07\x03\x02\x02\u0452\u0451" +
		"\x03\x02\x02\x02\u0452\u0453\x03\x02\x02\x02\u0453\u0454\x03\x02\x02\x02" +
		"\u0454\u0456\x07\xC3\x02\x02\u0455\u0343\x03\x02\x02\x02\u0455\u0354\x03" +
		"\x02\x02\x02\u0455\u0369\x03\x02\x02\x02\u0455\u0377\x03\x02\x02\x02\u0455" +
		"\u0385\x03\x02\x02\x02\u0455\u0393\x03\x02\x02\x02\u0455\u03A1\x03\x02" +
		"\x02\x02\u0455\u03AB\x03\x02\x02\x02\u0455\u03B5\x03\x02\x02\x02\u0455" +
		"\u03BF\x03\x02\x02\x02\u0455\u03C9\x03\x02\x02\x02\u0455\u03CF\x03\x02" +
		"\x02\x02\u0455\u03D9\x03\x02\x02\x02\u0455\u03E3\x03\x02\x02\x02\u0455" +
		"\u03ED\x03\x02\x02\x02\u0455\u03F7\x03\x02\x02\x02\u0455\u0401\x03\x02" +
		"\x02\x02\u0455\u0407\x03\x02\x02\x02\u0455\u040D\x03\x02\x02\x02\u0455" +
		"\u0413\x03\x02\x02\x02\u0455\u0419\x03\x02\x02\x02\u0455\u0423\x03\x02" +
		"\x02\x02\u0455\u042D\x03\x02\x02\x02\u0455\u0437\x03\x02\x02\x02\u0455" +
		"\u043D\x03\x02\x02\x02\u0455\u0443\x03\x02\x02\x02\u0455\u0449\x03\x02" +
		"\x02\x02\u0455\u044F\x03\x02\x02\x02\u0456\x17\x03\x02\x02\x02\u0457\u0458" +
		"\x07i\x02\x02\u0458\u045A\x07\xC4\x02\x02\u0459\u045B\x07\x03\x02\x02" +
		"\u045A\u0459\x03\x02\x02\x02\u045A\u045B\x03\x02\x02\x02\u045B\u0466\x03" +
		"\x02\x02\x02\u045C\u045E\x07\xC3\x02\x02\u045D\u045F\x07\x03\x02\x02\u045E" +
		"\u045D\x03\x02\x02\x02\u045E\u045F\x03\x02\x02\x02\u045F\u0460\x03\x02" +
		"\x02\x02\u0460\u0467\x05&\x14\x02\u0461\u0462\x05&\x14\x02\u0462\u0463" +
		"\x07\x04\x02\x02\u0463\u0464\x07\xC3\x02\x02\u0464\u0465\x07\x05\x02\x02" +
		"\u0465\u0467\x03\x02\x02\x02\u0466\u045C\x03\x02\x02\x02\u0466\u0461\x03" +
		"\x02\x02\x02\u0467\u055E\x03\x02\x02\x02\u0468\u047B\x07j\x02\x02\u0469" +
		"\u046B\x07\xC3\x02\x02\u046A\u046C\x07\x03\x02\x02\u046B\u046A\x03\x02" +
		"\x02\x02\u046B\u046C\x03\x02\x02\x02\u046C\u046D\x03\x02\x02\x02\u046D" +
		"\u046F\x07\xC4\x02\x02\u046E\u0470\x07\x03\x02\x02\u046F\u046E\x03\x02" +
		"\x02\x02\u046F\u0470\x03\x02\x02\x02\u0470\u0471\x03\x02\x02\x02\u0471" +
		"\u047C\x05&\x14\x02\u0472\u0474\x07\xC4\x02\x02\u0473\u0475\x07\x03\x02" +
		"\x02\u0474\u0473\x03\x02\x02\x02\u0474\u0475\x03\x02\x02\x02\u0475\u0476" +
		"\x03\x02\x02\x02\u0476\u0477\x05&\x14\x02\u0477\u0478\x07\x04\x02\x02" +
		"\u0478\u0479\x07\xC3\x02\x02\u0479\u047A\x07\x05\x02\x02\u047A\u047C\x03" +
		"\x02\x02\x02\u047B\u0469\x03\x02\x02\x02\u047B\u0472\x03\x02\x02\x02\u047C" +
		"\u055E\x03\x02\x02\x02\u047D\u047E\x07k\x02\x02\u047E\u0480\x07\xC4\x02" +
		"\x02\u047F\u0481\x07\x03\x02\x02\u0480\u047F\x03\x02\x02\x02\u0480\u0481" +
		"\x03\x02\x02\x02\u0481\u0482\x03\x02\x02\x02\u0482\u0484\x07\xC4\x02\x02" +
		"\u0483\u0485\x07\x03\x02\x02\u0484\u0483\x03\x02\x02\x02\u0484\u0485\x03" +
		"\x02\x02\x02\u0485\u0486\x03\x02\x02\x02\u0486\u0488\x07\xC4\x02\x02\u0487" +
		"\u0489\x07\x03\x02\x02\u0488\u0487\x03\x02\x02\x02\u0488\u0489\x03\x02" +
		"\x02\x02\u0489\u048A\x03\x02\x02\x02\u048A\u055E\x07\xC4\x02\x02\u048B" +
		"\u048C\x07l\x02\x02\u048C\u048E\x07\xC4\x02\x02\u048D\u048F\x07\x03\x02" +
		"\x02\u048E\u048D\x03\x02\x02\x02\u048E\u048F\x03\x02\x02\x02\u048F\u0490" +
		"\x03\x02\x02\x02\u0490\u0492\x07\xC4\x02\x02\u0491\u0493\x07\x03\x02\x02" +
		"\u0492\u0491\x03\x02\x02\x02\u0492\u0493\x03\x02\x02\x02\u0493\u0494\x03" +
		"\x02\x02\x02\u0494\u0496\x07\xC4\x02\x02\u0495\u0497\x07\x03\x02\x02\u0496" +
		"\u0495\x03\x02\x02\x02\u0496\u0497\x03\x02\x02\x02\u0497\u0498\x03\x02" +
		"\x02\x02\u0498\u055E\x07\xC4\x02\x02\u0499\u049A\x07m\x02\x02\u049A\u049C" +
		"\x07\xC4\x02\x02\u049B\u049D\x07\x03\x02\x02\u049C\u049B\x03\x02\x02\x02" +
		"\u049C\u049D\x03\x02\x02\x02\u049D\u049E\x03\x02\x02\x02\u049E\u04A0\x07" +
		"\xC4\x02\x02\u049F\u04A1\x07\x03\x02\x02\u04A0\u049F\x03\x02\x02\x02\u04A0" +
		"\u04A1\x03\x02\x02\x02\u04A1\u04A2\x03\x02\x02\x02\u04A2\u04A4\x07\xC4" +
		"\x02\x02\u04A3\u04A5\x07\x03\x02\x02\u04A4\u04A3\x03\x02\x02\x02\u04A4" +
		"\u04A5\x03\x02\x02\x02\u04A5\u04A6\x03\x02\x02\x02\u04A6\u055E\x07\xC4" +
		"\x02\x02\u04A7\u04A8\x07n\x02\x02\u04A8\u04AA\x07\xC4\x02\x02\u04A9\u04AB" +
		"\x07\x03\x02\x02\u04AA\u04A9\x03\x02\x02\x02\u04AA\u04AB\x03\x02\x02\x02" +
		"\u04AB\u04AC\x03\x02\x02\x02\u04AC\u04AE\x07\xC4\x02\x02\u04AD\u04AF\x07" +
		"\x03\x02\x02\u04AE\u04AD\x03\x02\x02\x02\u04AE\u04AF\x03\x02\x02\x02\u04AF" +
		"\u04B0\x03\x02\x02\x02\u04B0\u04B2\x07\xC4\x02\x02\u04B1\u04B3\x07\x03" +
		"\x02\x02\u04B2\u04B1\x03\x02\x02\x02\u04B2\u04B3\x03\x02\x02\x02\u04B3" +
		"\u04B4\x03\x02\x02\x02\u04B4\u055E\x07\xC4\x02\x02\u04B5\u04B6\x07o\x02" +
		"\x02\u04B6\u04B8\x07\xC4\x02\x02\u04B7\u04B9\x07\x03\x02\x02\u04B8\u04B7" +
		"\x03\x02\x02\x02\u04B8\u04B9\x03\x02\x02\x02\u04B9\u04BA\x03\x02\x02\x02" +
		"\u04BA\u04BC\x07\xC4\x02\x02\u04BB\u04BD\x07\x03\x02\x02\u04BC\u04BB\x03" +
		"\x02\x02\x02\u04BC\u04BD\x03\x02\x02\x02\u04BD\u04BE\x03\x02\x02\x02\u04BE" +
		"\u055E\x07\xC4\x02\x02\u04BF\u04C0\x07p\x02\x02\u04C0\u04C2\x07\xC4\x02" +
		"\x02\u04C1\u04C3\x07\x03\x02\x02\u04C2\u04C1\x03\x02\x02\x02\u04C2\u04C3" +
		"\x03\x02\x02\x02\u04C3\u04C4\x03\x02\x02\x02\u04C4\u04C6\x07\xC4\x02\x02" +
		"\u04C5\u04C7\x07\x03\x02\x02\u04C6\u04C5\x03\x02\x02\x02\u04C6\u04C7\x03" +
		"\x02\x02\x02\u04C7\u04C8\x03\x02\x02\x02\u04C8\u055E\x07\xC4\x02\x02\u04C9" +
		"\u04CA\x07q\x02\x02\u04CA\u04CC\x07\xC4\x02\x02\u04CB\u04CD\x07\x03\x02" +
		"\x02\u04CC\u04CB\x03\x02\x02\x02\u04CC\u04CD\x03\x02\x02\x02\u04CD\u04CE" +
		"\x03\x02\x02\x02\u04CE\u04D0\x07\xC4\x02\x02\u04CF\u04D1\x07\x03\x02\x02" +
		"\u04D0\u04CF\x03\x02\x02\x02\u04D0\u04D1\x03\x02\x02\x02\u04D1\u04D2\x03" +
		"\x02\x02\x02\u04D2\u055E\x07\xC4\x02\x02\u04D3\u04D4\x07r\x02\x02\u04D4" +
		"\u04D6\x07\xC4\x02\x02\u04D5\u04D7\x07\x03\x02\x02\u04D6\u04D5\x03\x02" +
		"\x02\x02\u04D6\u04D7\x03\x02\x02\x02\u04D7\u04D8\x03\x02\x02\x02\u04D8" +
		"\u04DA\x07\xC4\x02\x02\u04D9\u04DB\x07\x03\x02\x02\u04DA\u04D9\x03\x02" +
		"\x02\x02\u04DA\u04DB\x03\x02\x02\x02\u04DB\u04DC\x03\x02\x02\x02\u04DC" +
		"\u055E\x07\xC4\x02\x02\u04DD\u04DE\x07s\x02\x02\u04DE\u04E0\x07\xC4\x02" +
		"\x02\u04DF\u04E1\x07\x03\x02\x02\u04E0\u04DF\x03\x02\x02\x02\u04E0\u04E1" +
		"\x03\x02\x02\x02\u04E1\u04E2\x03\x02\x02\x02\u04E2\u055E\x07\xC4\x02\x02" +
		"\u04E3\u04E4\x07t\x02\x02\u04E4\u04E6\x07\xC4\x02\x02\u04E5\u04E7\x07" +
		"\x03\x02\x02\u04E6\u04E5\x03\x02\x02\x02\u04E6\u04E7\x03\x02\x02\x02\u04E7" +
		"\u04E8\x03\x02\x02\x02\u04E8\u04EA\x07\xC4\x02\x02\u04E9\u04EB\x07\x03" +
		"\x02\x02\u04EA\u04E9\x03\x02\x02\x02\u04EA\u04EB\x03\x02\x02\x02\u04EB" +
		"\u04EC\x03\x02\x02\x02\u04EC\u055E\x07\xC4\x02\x02\u04ED\u04EE\x07u\x02" +
		"\x02\u04EE\u04F0\x07\xC4\x02\x02\u04EF\u04F1\x07\x03\x02\x02\u04F0\u04EF" +
		"\x03\x02\x02\x02\u04F0\u04F1\x03\x02\x02\x02\u04F1\u04F2\x03\x02\x02\x02" +
		"\u04F2\u04F4\x07\xC4\x02\x02\u04F3\u04F5\x07\x03\x02\x02\u04F4\u04F3\x03" +
		"\x02\x02\x02\u04F4\u04F5\x03\x02\x02\x02\u04F5\u04F6\x03\x02\x02\x02\u04F6" +
		"\u055E\x07\xC4\x02\x02\u04F7\u04F8\x07v\x02\x02\u04F8\u04FA\x07\xC4\x02" +
		"\x02\u04F9\u04FB\x07\x03\x02\x02\u04FA\u04F9\x03\x02\x02\x02\u04FA\u04FB" +
		"\x03\x02\x02\x02\u04FB\u04FC\x03\x02\x02\x02\u04FC\u04FE\x07\xC4\x02\x02" +
		"\u04FD\u04FF\x07\x03\x02\x02\u04FE\u04FD\x03\x02\x02\x02\u04FE\u04FF\x03" +
		"\x02\x02\x02\u04FF\u0500\x03\x02\x02\x02\u0500\u055E\x07\xC4\x02\x02\u0501" +
		"\u0502\x07w\x02\x02\u0502\u0504\x07\xC4\x02\x02\u0503\u0505\x07\x03\x02" +
		"\x02\u0504\u0503\x03\x02\x02\x02\u0504\u0505\x03\x02\x02\x02\u0505\u0506" +
		"\x03\x02\x02\x02\u0506\u0508\x07\xC4\x02\x02\u0507\u0509\x07\x03\x02\x02" +
		"\u0508\u0507\x03\x02\x02\x02\u0508\u0509\x03\x02\x02\x02\u0509\u050A\x03" +
		"\x02\x02\x02\u050A\u055E\x07\xC4\x02\x02\u050B\u050C\x07x\x02\x02\u050C" +
		"\u050E\x07\xC4\x02\x02\u050D\u050F\x07\x03\x02\x02\u050E\u050D\x03\x02" +
		"\x02\x02\u050E\u050F\x03\x02\x02\x02\u050F\u0510\x03\x02\x02\x02\u0510" +
		"\u0512\x07\xC4\x02\x02\u0511\u0513\x07\x03\x02\x02\u0512\u0511\x03\x02" +
		"\x02\x02\u0512\u0513\x03\x02\x02\x02\u0513\u0514\x03\x02\x02\x02\u0514" +
		"\u055E\x07\xC4\x02\x02\u0515\u0516\x07y\x02\x02\u0516\u0518\x07\xC4\x02" +
		"\x02\u0517\u0519\x07\x03\x02\x02\u0518\u0517\x03\x02\x02\x02\u0518\u0519" +
		"\x03\x02\x02\x02\u0519\u051A\x03\x02\x02\x02\u051A\u055E\x07\xC4\x02\x02" +
		"\u051B\u051C\x07z\x02\x02\u051C\u051E\x07\xC4\x02\x02\u051D\u051F\x07" +
		"\x03\x02\x02\u051E\u051D\x03\x02\x02\x02\u051E\u051F\x03\x02\x02\x02\u051F" +
		"\u0520\x03\x02\x02\x02\u0520\u055E\x07\xC4\x02\x02\u0521\u0522\x07{\x02" +
		"\x02\u0522\u0524\x07\xC3\x02\x02\u0523\u0525\x07\x03\x02\x02\u0524\u0523" +
		"\x03\x02\x02\x02\u0524\u0525\x03\x02\x02\x02\u0525\u0526\x03\x02\x02\x02" +
		"\u0526\u0528\x07\xC4\x02\x02\u0527\u0529\x07\x03\x02\x02\u0528\u0527\x03" +
		"\x02\x02\x02\u0528\u0529\x03\x02\x02\x02\u0529\u052A\x03\x02\x02\x02\u052A" +
		"\u055E\x07\xC4\x02\x02\u052B\u052C\x07|\x02\x02\u052C\u052E\x07\xC3\x02" +
		"\x02\u052D\u052F\x07\x03\x02\x02\u052E\u052D\x03\x02\x02\x02\u052E\u052F" +
		"\x03\x02\x02\x02\u052F\u0530\x03\x02\x02\x02\u0530\u0532\x07\xC4\x02\x02" +
		"\u0531\u0533\x07\x03\x02\x02\u0532\u0531\x03\x02\x02\x02\u0532\u0533\x03" +
		"\x02\x02\x02\u0533\u0534\x03\x02\x02\x02\u0534\u055E\x07\xC4\x02\x02\u0535" +
		"\u0536\x07}\x02\x02\u0536\u0538\x07\xC3\x02\x02\u0537\u0539\x07\x03\x02" +
		"\x02\u0538\u0537\x03\x02\x02\x02\u0538\u0539\x03\x02\x02\x02\u0539\u053A" +
		"\x03\x02\x02\x02\u053A\u053C\x07\xC4\x02\x02\u053B\u053D\x07\x03\x02\x02" +
		"\u053C\u053B\x03\x02\x02\x02\u053C\u053D\x03\x02\x02\x02\u053D\u053E\x03" +
		"\x02\x02\x02\u053E\u055E\x07\xC4\x02\x02\u053F\u0540\x07~\x02\x02\u0540" +
		"\u0542\x07\xC3\x02\x02\u0541\u0543\x07\x03\x02\x02\u0542\u0541\x03\x02" +
		"\x02\x02\u0542\u0543\x03\x02\x02\x02\u0543\u0544\x03\x02\x02\x02\u0544" +
		"\u055E\x07\xC4\x02\x02\u0545\u0546\x07\x7F\x02\x02\u0546\u0548\x07\xC3" +
		"\x02\x02\u0547\u0549\x07\x03\x02\x02\u0548\u0547\x03\x02\x02\x02\u0548" +
		"\u0549\x03\x02\x02\x02\u0549\u054A\x03\x02\x02\x02\u054A\u055E\x07\xC4" +
		"\x02\x02\u054B\u054C\x07\x80\x02\x02\u054C\u054E\x07\xC3\x02\x02\u054D" +
		"\u054F\x07\x03\x02\x02\u054E\u054D\x03\x02\x02\x02\u054E\u054F\x03\x02" +
		"\x02\x02\u054F\u0550\x03\x02\x02\x02\u0550\u055E\x07\xC4\x02\x02\u0551" +
		"\u0552\x07\x81\x02\x02\u0552\u0554\x07\xC4\x02\x02\u0553\u0555\x07\x03" +
		"\x02\x02\u0554\u0553\x03\x02\x02\x02\u0554\u0555\x03\x02\x02\x02\u0555" +
		"\u0556\x03\x02\x02\x02\u0556\u055E\x07\xC3\x02\x02\u0557\u0558\x07\x82" +
		"\x02\x02\u0558\u055A\x07\xC4\x02\x02\u0559\u055B\x07\x03\x02\x02\u055A" +
		"\u0559\x03\x02\x02\x02\u055A\u055B\x03\x02\x02\x02\u055B\u055C\x03\x02" +
		"\x02\x02\u055C\u055E\x07\xC3\x02\x02\u055D\u0457\x03\x02\x02\x02\u055D" +
		"\u0468\x03\x02\x02\x02\u055D\u047D\x03\x02\x02\x02\u055D\u048B\x03\x02" +
		"\x02\x02\u055D\u0499\x03\x02\x02\x02\u055D\u04A7\x03\x02\x02\x02\u055D" +
		"\u04B5\x03\x02\x02\x02\u055D\u04BF\x03\x02\x02\x02\u055D\u04C9\x03\x02" +
		"\x02\x02\u055D\u04D3\x03\x02\x02\x02\u055D\u04DD\x03\x02\x02\x02\u055D" +
		"\u04E3\x03\x02\x02\x02\u055D\u04ED\x03\x02\x02\x02\u055D\u04F7\x03\x02" +
		"\x02\x02\u055D\u0501\x03\x02\x02\x02\u055D\u050B\x03\x02\x02\x02\u055D" +
		"\u0515\x03\x02\x02\x02\u055D\u051B\x03\x02\x02\x02\u055D\u0521\x03\x02" +
		"\x02\x02\u055D\u052B\x03\x02\x02\x02\u055D\u0535\x03\x02\x02\x02\u055D" +
		"\u053F\x03\x02\x02\x02\u055D\u0545\x03\x02\x02\x02\u055D\u054B\x03\x02" +
		"\x02\x02\u055D\u0551\x03\x02\x02\x02\u055D\u0557\x03\x02\x02\x02\u055E" +
		"\x19\x03\x02\x02\x02\u055F\u0560\x07\x83\x02\x02\u0560\u0562\x07\xC3\x02" +
		"\x02\u0561\u0563\x07\x03\x02\x02\u0562\u0561\x03\x02\x02\x02\u0562\u0563" +
		"\x03\x02\x02\x02\u0563\u0564\x03\x02\x02\x02\u0564\u062C\x07\xC9\x02\x02" +
		"\u0565\u0566\x07\x84\x02\x02\u0566\u0568\x07\xC3\x02\x02\u0567\u0569\x07" +
		"\x03\x02\x02\u0568\u0567\x03\x02\x02\x02\u0568\u0569\x03\x02\x02\x02\u0569" +
		"\u056A\x03\x02\x02\x02\u056A\u062C\x07\xC9\x02\x02\u056B\u056C\x07\x15" +
		"\x02\x02\u056C\u056E\x07\xC3\x02\x02\u056D\u056F\x07\x03\x02\x02\u056E" +
		"\u056D\x03\x02\x02\x02\u056E\u056F\x03\x02\x02\x02\u056F\u0570\x03\x02" +
		"\x02\x02\u0570\u062C\x07\xC9\x02\x02\u0571\u0572\x07\x16\x02\x02\u0572" +
		"\u0574\x07\xC3\x02\x02\u0573\u0575\x07\x03\x02\x02\u0574\u0573\x03\x02" +
		"\x02\x02\u0574\u0575\x03\x02\x02\x02\u0575\u0576\x03\x02\x02\x02\u0576" +
		"\u062C\x07\xC9\x02\x02\u0577\u0578\x07\x17\x02\x02\u0578\u057A\x07\xC3" +
		"\x02\x02\u0579\u057B\x07\x03\x02\x02\u057A\u0579\x03\x02\x02\x02\u057A" +
		"\u057B\x03\x02\x02\x02\u057B\u057C\x03\x02\x02\x02\u057C\u062C\x07\xC9" +
		"\x02\x02\u057D\u057E\x07\x1A\x02\x02\u057E\u0580\x07\xC3\x02\x02\u057F" +
		"\u0581\x07\x03\x02\x02\u0580\u057F\x03\x02\x02\x02\u0580\u0581\x03\x02" +
		"\x02\x02\u0581\u0582\x03\x02\x02\x02\u0582\u0584\x07\xC9\x02\x02\u0583" +
		"\u0585\x07\x03\x02\x02\u0584\u0583\x03\x02\x02\x02\u0584\u0585\x03\x02" +
		"\x02\x02\u0585\u0586\x03\x02\x02\x02\u0586\u062C\x07\xC3\x02\x02\u0587" +
		"\u0588\x07\x1B\x02\x02\u0588\u058A\x07\xC3\x02\x02\u0589\u058B\x07\x03" +
		"\x02\x02\u058A\u0589\x03\x02\x02\x02\u058A\u058B\x03\x02\x02\x02\u058B" +
		"\u058C\x03\x02\x02\x02\u058C\u058E\x07\xC9\x02\x02\u058D\u058F\x07\x03" +
		"\x02\x02\u058E\u058D\x03\x02\x02\x02\u058E\u058F\x03\x02\x02\x02\u058F" +
		"\u0590\x03\x02\x02\x02\u0590\u062C\x07\xC3\x02\x02\u0591\u0592\x07\x1C" +
		"\x02\x02\u0592\u0594\x07\xC3\x02\x02\u0593\u0595\x07\x03\x02\x02\u0594" +
		"\u0593\x03\x02\x02\x02\u0594";
	private static readonly _serializedATNSegment3: string =
		"\u0595\x03\x02\x02\x02\u0595\u0596\x03\x02\x02\x02\u0596\u0598\x07\xC9" +
		"\x02\x02\u0597\u0599\x07\x03\x02\x02\u0598\u0597\x03\x02\x02\x02\u0598" +
		"\u0599\x03\x02\x02\x02\u0599\u059A\x03\x02\x02\x02\u059A\u062C\x07\xC3" +
		"\x02\x02\u059B\u062C\x07\x85\x02\x02\u059C\u059D\x07\x86\x02\x02\u059D" +
		"\u059F\x07\xC3\x02\x02\u059E\u05A0\x07\x03\x02\x02\u059F\u059E\x03\x02" +
		"\x02\x02\u059F\u05A0\x03\x02\x02\x02\u05A0\u05A1\x03\x02\x02\x02\u05A1" +
		"\u062C\x05&\x14\x02\u05A2\u05A3\x07\x87\x02\x02\u05A3\u05A5\x07\xC3\x02" +
		"\x02\u05A4\u05A6\x07\x03\x02\x02\u05A5\u05A4\x03\x02\x02\x02\u05A5\u05A6" +
		"\x03\x02\x02\x02\u05A6\u05A7\x03\x02\x02\x02\u05A7\u062C\x07\xC3\x02\x02" +
		"\u05A8\u05A9\x07\x88\x02\x02\u05A9\u05AB\x07\xC3\x02\x02\u05AA\u05AC\x07" +
		"\x03\x02\x02\u05AB\u05AA\x03\x02\x02\x02\u05AB\u05AC\x03\x02\x02\x02\u05AC" +
		"\u05AD\x03\x02\x02\x02\u05AD\u062C\x07\xC3\x02\x02\u05AE\u05AF\x07\x89" +
		"\x02\x02\u05AF\u05B1\x07\xC3\x02\x02\u05B0\u05B2\x07\x03\x02\x02\u05B1" +
		"\u05B0\x03\x02\x02\x02\u05B1\u05B2\x03\x02\x02\x02\u05B2\u05B3\x03\x02" +
		"\x02\x02\u05B3\u062C\x07\xC3\x02\x02\u05B4\u05B5\x07\x8A\x02\x02\u05B5" +
		"\u05B7\x07\xC3\x02\x02\u05B6\u05B8\x07\x03\x02\x02\u05B7\u05B6\x03\x02" +
		"\x02\x02\u05B7\u05B8\x03\x02\x02\x02\u05B8\u05B9\x03\x02\x02\x02\u05B9" +
		"\u062C\x07\xC3\x02\x02\u05BA\u05BB\x07\x8B\x02\x02\u05BB\u05BD\x07\xC3" +
		"\x02\x02\u05BC\u05BE\x07\x03\x02\x02\u05BD\u05BC\x03\x02\x02\x02\u05BD" +
		"\u05BE\x03\x02\x02\x02\u05BE\u05BF\x03\x02\x02\x02\u05BF\u062C\x07\xC3" +
		"\x02\x02\u05C0\u05C1\x07\x8C\x02\x02\u05C1\u05C3\x07\xC3\x02\x02\u05C2" +
		"\u05C4\x07\x03\x02\x02\u05C3\u05C2\x03\x02\x02\x02\u05C3\u05C4\x03\x02" +
		"\x02\x02\u05C4\u05C5\x03\x02\x02\x02\u05C5\u062C\x07\xC3\x02\x02\u05C6" +
		"\u05C7\x07\x8D\x02\x02\u05C7\u05C9\x07\xC3\x02\x02\u05C8\u05CA\x07\x03" +
		"\x02\x02\u05C9\u05C8\x03\x02\x02\x02\u05C9\u05CA\x03\x02\x02\x02\u05CA" +
		"\u05CB\x03\x02\x02\x02\u05CB\u062C\x07\xC3\x02\x02\u05CC\u05CD\x07\x8E" +
		"\x02\x02\u05CD\u05CF\x07\xC3\x02\x02\u05CE\u05D0\x07\x03\x02\x02\u05CF" +
		"\u05CE\x03\x02\x02\x02\u05CF\u05D0\x03\x02\x02\x02\u05D0\u05D1\x03\x02" +
		"\x02\x02\u05D1\u062C\x07\xC9\x02\x02\u05D2\u05D3\x07\x8F\x02\x02\u05D3" +
		"\u05D5\x07\xC3\x02\x02\u05D4\u05D6\x07\x03\x02\x02\u05D5\u05D4\x03\x02" +
		"\x02\x02\u05D5\u05D6\x03\x02\x02\x02\u05D6\u05D7\x03\x02\x02\x02\u05D7" +
		"\u062C\x07\xC9\x02\x02\u05D8\u05D9\x07\x90\x02\x02\u05D9\u05DB\x07\xC3" +
		"\x02\x02\u05DA\u05DC\x07\x03\x02\x02\u05DB\u05DA\x03\x02\x02\x02\u05DB" +
		"\u05DC\x03\x02\x02\x02\u05DC\u05DD\x03\x02\x02\x02\u05DD\u062C\x07\xC9" +
		"\x02\x02\u05DE\u05DF\x07\x91\x02\x02\u05DF\u05E1\x07\xC3\x02\x02\u05E0" +
		"\u05E2\x07\x03\x02\x02\u05E1\u05E0\x03\x02\x02\x02\u05E1\u05E2\x03\x02" +
		"\x02\x02\u05E2\u05E3\x03\x02\x02\x02\u05E3\u062C\x07\xC9\x02\x02\u05E4" +
		"\u05E5\x07\x92\x02\x02\u05E5\u05E7\x07\xC3\x02\x02\u05E6\u05E8\x07\x03" +
		"\x02\x02\u05E7\u05E6\x03\x02\x02\x02\u05E7\u05E8\x03\x02\x02\x02\u05E8" +
		"\u05E9\x03\x02\x02\x02\u05E9\u062C\x07\xC9\x02\x02\u05EA\u05EB\x07\x93" +
		"\x02\x02\u05EB\u05ED\x07\xC3\x02\x02\u05EC\u05EE\x07\x03\x02\x02\u05ED" +
		"\u05EC\x03\x02\x02\x02\u05ED\u05EE\x03\x02\x02\x02\u05EE\u05EF\x03\x02" +
		"\x02\x02\u05EF\u062C\x07\xC9\x02\x02\u05F0\u05F1\x07\x94\x02\x02\u05F1" +
		"\u05F3\x07\xC3\x02\x02\u05F2\u05F4\x07\x03\x02\x02\u05F3\u05F2\x03\x02" +
		"\x02\x02\u05F3\u05F4\x03\x02\x02\x02\u05F4\u05F5\x03\x02\x02\x02\u05F5" +
		"\u05F7\x07\xC3\x02\x02\u05F6\u05F8\x07\x03\x02\x02\u05F7\u05F6\x03\x02" +
		"\x02\x02\u05F7\u05F8\x03\x02\x02\x02\u05F8\u05F9\x03\x02\x02\x02\u05F9" +
		"\u062C\x07\xC9\x02\x02\u05FA\u05FB\x07\x95\x02\x02\u05FB\u05FD\x07\xC3" +
		"\x02\x02\u05FC\u05FE\x07\x03\x02\x02\u05FD\u05FC\x03\x02\x02\x02\u05FD" +
		"\u05FE\x03\x02\x02\x02\u05FE\u05FF\x03\x02\x02\x02\u05FF\u0601\x07\xC3" +
		"\x02\x02\u0600\u0602\x07\x03\x02\x02\u0601\u0600\x03\x02\x02\x02\u0601" +
		"\u0602\x03\x02\x02\x02\u0602\u0603\x03\x02\x02\x02\u0603\u062C\x07\xC9" +
		"\x02\x02\u0604\u0605\x07\x96\x02\x02\u0605\u0607\x07\xC3\x02\x02\u0606" +
		"\u0608\x07\x03\x02\x02\u0607\u0606\x03\x02\x02\x02\u0607\u0608\x03\x02" +
		"\x02\x02\u0608\u0609\x03\x02\x02\x02\u0609\u060B\x07\xC3\x02\x02\u060A" +
		"\u060C\x07\x03\x02\x02\u060B\u060A\x03\x02\x02\x02\u060B\u060C\x03\x02" +
		"\x02\x02\u060C\u060D\x03\x02\x02\x02\u060D\u062C\x07\xC9\x02\x02\u060E" +
		"\u060F\x07\x97\x02\x02\u060F\u0611\x07\xC3\x02\x02\u0610\u0612\x07\x03" +
		"\x02\x02\u0611\u0610\x03\x02\x02\x02\u0611\u0612\x03\x02\x02\x02\u0612" +
		"\u0613\x03\x02\x02\x02\u0613\u0615\x07\xC3\x02\x02\u0614\u0616\x07\x03" +
		"\x02\x02\u0615\u0614\x03\x02\x02\x02\u0615\u0616\x03\x02\x02\x02\u0616" +
		"\u0617\x03\x02\x02\x02\u0617\u062C\x07\xC9\x02\x02\u0618\u0619\x07\x98" +
		"\x02\x02\u0619\u062C\x07\xC9\x02\x02\u061A\u061B\x07\r\x02\x02\u061B\u062C" +
		"\x07\xC9\x02\x02\u061C\u061D\x07\x99\x02\x02\u061D\u062C\x07\xC3\x02\x02" +
		"\u061E\u061F\x07\x0E\x02\x02\u061F\u062C\x07\xC3\x02\x02\u0620\u062C\x07" +
		"\x9A\x02\x02\u0621\u0623\x07\x9B\x02\x02\u0622\u0624\x07\x03\x02\x02\u0623" +
		"\u0622\x03\x02\x02\x02\u0623\u0624\x03\x02\x02\x02\u0624\u0625\x03\x02" +
		"\x02\x02\u0625\u062C\x07\xC9\x02\x02\u0626\u0628\x07\x9C\x02\x02\u0627" +
		"\u0629\x07\x03\x02\x02\u0628\u0627\x03\x02\x02\x02\u0628\u0629\x03\x02" +
		"\x02\x02\u0629\u062A\x03\x02\x02\x02\u062A\u062C\x07\xC9\x02\x02\u062B" +
		"\u055F\x03\x02\x02\x02\u062B\u0565\x03\x02\x02\x02\u062B\u056B\x03\x02" +
		"\x02\x02\u062B\u0571\x03\x02\x02\x02\u062B\u0577\x03\x02\x02\x02\u062B" +
		"\u057D\x03\x02\x02\x02\u062B\u0587\x03\x02\x02\x02\u062B\u0591\x03\x02" +
		"\x02\x02\u062B\u059B\x03\x02\x02\x02\u062B\u059C\x03\x02\x02\x02\u062B" +
		"\u05A2\x03\x02\x02\x02\u062B\u05A8\x03\x02\x02\x02\u062B\u05AE\x03\x02" +
		"\x02\x02\u062B\u05B4\x03\x02\x02\x02\u062B\u05BA\x03\x02\x02\x02\u062B" +
		"\u05C0\x03\x02\x02\x02\u062B\u05C6\x03\x02\x02\x02\u062B\u05CC\x03\x02" +
		"\x02\x02\u062B\u05D2\x03\x02\x02\x02\u062B\u05D8\x03\x02\x02\x02\u062B" +
		"\u05DE\x03\x02\x02\x02\u062B\u05E4\x03\x02\x02\x02\u062B\u05EA\x03\x02" +
		"\x02\x02\u062B\u05F0\x03\x02\x02\x02\u062B\u05FA\x03\x02\x02\x02\u062B" +
		"\u0604\x03\x02\x02\x02\u062B\u060E\x03\x02\x02\x02\u062B\u0618\x03\x02" +
		"\x02\x02\u062B\u061A\x03\x02\x02\x02\u062B\u061C\x03\x02\x02\x02\u062B" +
		"\u061E\x03\x02\x02\x02\u062B\u0620\x03\x02\x02\x02\u062B\u0621\x03\x02" +
		"\x02\x02\u062B\u0626\x03\x02\x02\x02\u062C\x1B\x03\x02\x02\x02\u062D\u062E" +
		"\x07\x9D\x02\x02\u062E\u0682\x07\xC3\x02\x02\u062F\u0630\x07\x9E\x02\x02" +
		"\u0630\u0682\x07\xC3\x02\x02\u0631\u0632\x07\x9F\x02\x02\u0632\u0682\x07" +
		"\xC3\x02\x02\u0633\u0634\x07\xA0\x02\x02\u0634\u0636\x07\xC3\x02\x02\u0635" +
		"\u0637\x07\x03\x02\x02\u0636\u0635\x03\x02\x02\x02\u0636\u0637\x03\x02" +
		"\x02\x02\u0637\u0638\x03\x02\x02\x02\u0638\u0682\x05&\x14\x02\u0639\u063A" +
		"\x07\xA1\x02\x02\u063A\u063C\x05&\x14\x02\u063B\u063D\x07\x03\x02\x02" +
		"\u063C\u063B\x03\x02\x02\x02\u063C\u063D\x03\x02\x02\x02\u063D\u063E\x03" +
		"\x02\x02\x02\u063E\u063F\x07\xC3\x02\x02\u063F\u0682\x03\x02\x02\x02\u0640" +
		"\u0641\x07\xA2\x02\x02\u0641\u0643\x05&\x14\x02\u0642\u0644\x07\x03\x02" +
		"\x02\u0643\u0642\x03\x02\x02\x02\u0643\u0644\x03\x02\x02\x02\u0644\u0645" +
		"\x03\x02\x02\x02\u0645\u0646\x07\xC3\x02\x02\u0646\u0682\x03\x02\x02\x02" +
		"\u0647\u0648\x07\xA3\x02\x02\u0648\u064A\x05&\x14\x02\u0649\u064B\x07" +
		"\x03\x02\x02\u064A\u0649\x03\x02\x02\x02\u064A\u064B\x03\x02\x02\x02\u064B" +
		"\u064C\x03\x02\x02\x02\u064C\u064D\x07\xC3\x02\x02\u064D\u0682\x03\x02" +
		"\x02\x02\u064E\u064F\x07\xA4\x02\x02\u064F\u0651\x05&\x14\x02\u0650\u0652" +
		"\x07\x03\x02\x02\u0651\u0650\x03\x02\x02\x02\u0651\u0652\x03\x02\x02\x02" +
		"\u0652\u0653\x03\x02\x02\x02\u0653\u0654\x07\xC6\x02\x02\u0654\u0682\x03" +
		"\x02\x02\x02\u0655\u0656\x07\xA5\x02\x02\u0656\u0658\x05&\x14\x02\u0657" +
		"\u0659\x07\x03\x02\x02\u0658\u0657\x03\x02\x02\x02\u0658\u0659\x03\x02" +
		"\x02\x02\u0659\u065A\x03\x02\x02\x02\u065A\u065B\x07\xC6\x02\x02\u065B" +
		"\u0682\x03\x02\x02\x02\u065C\u065D\x07\xA6\x02\x02\u065D\u065F\x05&\x14" +
		"\x02\u065E\u0660\x07\x03\x02\x02\u065F\u065E\x03\x02\x02\x02\u065F\u0660" +
		"\x03\x02\x02\x02\u0660\u0661\x03\x02\x02\x02\u0661\u0662\x07\xC6\x02\x02" +
		"\u0662\u0682\x03\x02\x02\x02\u0663\u0664\x07\xA7\x02\x02\u0664\u0682\x07" +
		"\xC3\x02\x02\u0665\u0666\x07\xA8\x02\x02\u0666\u0682\x07\xC3\x02\x02\u0667" +
		"\u0668\x07\xA8\x02\x02\u0668\u066A\x07\xC3\x02\x02\u0669\u066B\x07\x03" +
		"\x02\x02\u066A\u0669\x03\x02\x02\x02\u066A\u066B\x03\x02\x02\x02\u066B" +
		"\u066C\x03\x02\x02\x02\u066C\u0682\x07\xC3\x02\x02\u066D\u066E\x07\xA9" +
		"\x02\x02\u066E\u0682\x07\xC3\x02\x02\u066F\u0670\x07\xAA\x02\x02\u0670" +
		"\u0682\x07\xC3\x02\x02\u0671\u0672\x07\xAA\x02\x02\u0672\u0674\x07\xC3" +
		"\x02\x02\u0673\u0675\x07\x03\x02\x02\u0674\u0673\x03\x02\x02\x02\u0674" +
		"\u0675\x03\x02\x02\x02\u0675\u0676\x03\x02\x02\x02\u0676\u0682\x07\xC3" +
		"\x02\x02\u0677\u0678\x07\xAB\x02\x02\u0678\u0682\x07\xC3\x02\x02\u0679" +
		"\u067A\x07\xAC\x02\x02\u067A\u0682\x07\xC3\x02\x02\u067B\u067C\x07\xAC" +
		"\x02\x02\u067C\u067E\x07\xC3\x02\x02\u067D\u067F\x07\x03\x02\x02\u067E" +
		"\u067D\x03\x02\x02\x02\u067E\u067F\x03\x02\x02\x02\u067F\u0680\x03\x02" +
		"\x02\x02\u0680\u0682\x07\xC3\x02\x02\u0681\u062D\x03\x02\x02\x02\u0681" +
		"\u062F\x03\x02\x02\x02\u0681\u0631\x03\x02\x02\x02\u0681\u0633\x03\x02" +
		"\x02\x02\u0681\u0639\x03\x02\x02\x02\u0681\u0640\x03\x02\x02\x02\u0681" +
		"\u0647\x03\x02\x02\x02\u0681\u064E\x03\x02\x02\x02\u0681\u0655\x03\x02" +
		"\x02\x02\u0681\u065C\x03\x02\x02\x02\u0681\u0663\x03\x02\x02\x02\u0681" +
		"\u0665\x03\x02\x02\x02\u0681\u0667\x03\x02\x02\x02\u0681\u066D\x03\x02" +
		"\x02\x02\u0681\u066F\x03\x02\x02\x02\u0681\u0671\x03\x02\x02\x02\u0681" +
		"\u0677\x03\x02\x02\x02\u0681\u0679\x03\x02\x02\x02\u0681\u067B\x03\x02" +
		"\x02\x02\u0682\x1D\x03\x02\x02\x02\u0683\u0684\x07M\x02\x02\u0684\u0686" +
		"\x07\xC4\x02\x02\u0685\u0687\x07\x03\x02\x02\u0686\u0685\x03\x02\x02\x02" +
		"\u0686\u0687\x03\x02\x02\x02\u0687\u0688\x03\x02\x02\x02\u0688\u068A\x07" +
		"\xC9\x02\x02\u0689\u068B\x07\x03\x02\x02\u068A\u0689\x03\x02\x02\x02\u068A" +
		"\u068B\x03\x02\x02\x02\u068B\u068C\x03\x02\x02\x02\u068C\u06AA\x07\xC3" +
		"\x02\x02\u068D\u068E\x07N\x02\x02\u068E\u0690\x07\xC4\x02\x02\u068F\u0691" +
		"\x07\x03\x02\x02\u0690\u068F\x03\x02\x02\x02\u0690\u0691\x03\x02\x02\x02" +
		"\u0691\u0692\x03\x02\x02\x02\u0692\u0694\x07\xC9\x02\x02\u0693\u0695\x07" +
		"\x03\x02\x02\u0694\u0693\x03\x02\x02\x02\u0694\u0695\x03\x02\x02\x02\u0695" +
		"\u0696\x03\x02\x02\x02\u0696\u06AA\x07\xC3\x02\x02\u0697\u0698\x07\xAD" +
		"\x02\x02\u0698\u069A\x07\xC4\x02\x02\u0699\u069B\x07\x03\x02\x02\u069A" +
		"\u0699\x03\x02\x02\x02\u069A\u069B\x03\x02\x02\x02\u069B\u069C\x03\x02" +
		"\x02\x02\u069C\u06AA\x07\xC4\x02\x02\u069D\u069E\x07\xAE\x02\x02\u069E" +
		"\u06A0\x07\xC4\x02\x02\u069F\u06A1\x07\x03\x02\x02\u06A0\u069F\x03\x02" +
		"\x02\x02\u06A0\u06A1\x03\x02\x02\x02\u06A1\u06A2\x03\x02\x02\x02\u06A2" +
		"\u06AA\x07\xC4\x02\x02\u06A3\u06A4\x07\xAF\x02\x02\u06A4\u06A6\x07\xC4" +
		"\x02\x02\u06A5\u06A7\x07\x03\x02\x02\u06A6\u06A5\x03\x02\x02\x02\u06A6" +
		"\u06A7\x03\x02\x02\x02\u06A7\u06A8\x03\x02\x02\x02\u06A8\u06AA\x07\xC4" +
		"\x02\x02\u06A9\u0683\x03\x02\x02\x02\u06A9\u068D\x03\x02\x02\x02\u06A9" +
		"\u0697\x03\x02\x02\x02\u06A9\u069D\x03\x02\x02\x02\u06A9\u06A3\x03\x02" +
		"\x02\x02\u06AA\x1F\x03\x02\x02\x02\u06AB\u06AC\x07i\x02\x02\u06AC\u06AE" +
		"\x07\xC4\x02\x02\u06AD\u06AF\x07\x03\x02\x02\u06AE\u06AD\x03\x02\x02\x02" +
		"\u06AE\u06AF\x03\x02\x02\x02\u06AF\u06B0\x03\x02\x02\x02\u06B0\u06B2\x07" +
		"\xC9\x02\x02\u06B1\u06B3\x07\x03\x02\x02\u06B2\u06B1\x03\x02\x02\x02\u06B2" +
		"\u06B3\x03\x02\x02\x02\u06B3\u06B4\x03\x02\x02\x02\u06B4\u06D2\x07\xC3" +
		"\x02\x02\u06B5\u06B6\x07j\x02\x02\u06B6\u06B8\x07\xC4\x02\x02\u06B7\u06B9" +
		"\x07\x03\x02\x02\u06B8\u06B7\x03\x02\x02\x02\u06B8\u06B9\x03\x02\x02\x02" +
		"\u06B9\u06BA\x03\x02\x02\x02\u06BA\u06BC\x07\xC9\x02\x02\u06BB\u06BD\x07" +
		"\x03\x02\x02\u06BC\u06BB\x03\x02\x02\x02\u06BC\u06BD\x03\x02\x02\x02\u06BD" +
		"\u06BE\x03\x02\x02\x02\u06BE\u06D2\x07\xC3\x02\x02\u06BF\u06C0\x07\xB0" +
		"\x02\x02\u06C0\u06C2\x07\xC4\x02\x02\u06C1\u06C3\x07\x03\x02\x02\u06C2" +
		"\u06C1\x03\x02\x02\x02\u06C2\u06C3\x03\x02\x02\x02\u06C3\u06C4\x03\x02" +
		"\x02\x02\u06C4\u06D2\x07\xC4\x02\x02\u06C5\u06C6\x07\xB1\x02\x02\u06C6" +
		"\u06C8\x07\xC4\x02\x02\u06C7\u06C9\x07\x03\x02\x02\u06C8\u06C7\x03\x02" +
		"\x02\x02\u06C8\u06C9\x03\x02\x02\x02\u06C9\u06CA\x03\x02\x02\x02\u06CA" +
		"\u06D2\x07\xC4\x02\x02\u06CB\u06CC\x07\xB2\x02\x02\u06CC\u06CE\x07\xC4" +
		"\x02\x02\u06CD\u06CF\x07\x03\x02\x02\u06CE\u06CD\x03\x02\x02\x02\u06CE" +
		"\u06CF\x03\x02\x02\x02\u06CF\u06D0\x03\x02\x02\x02\u06D0\u06D2\x07\xC4" +
		"\x02\x02\u06D1\u06AB\x03\x02\x02\x02\u06D1\u06B5\x03\x02\x02\x02\u06D1" +
		"\u06BF\x03\x02\x02\x02\u06D1\u06C5\x03\x02\x02\x02\u06D1\u06CB\x03\x02" +
		"\x02\x02\u06D2!\x03\x02\x02\x02\u06D3\u06D4\x07\xBC\x02\x02\u06D4\u06DB" +
		"\x05&\x14\x02\u06D5\u06D7\x07\x03\x02\x02\u06D6\u06D5\x03\x02\x02\x02" +
		"\u06D6\u06D7\x03\x02\x02\x02\u06D7\u06D8\x03\x02\x02\x02\u06D8\u06DA\x05" +
		"&\x14\x02\u06D9\u06D6\x03\x02\x02\x02\u06DA\u06DD\x03\x02\x02\x02\u06DB" +
		"\u06D9\x03\x02\x02\x02\u06DB\u06DC\x03\x02\x02\x02\u06DC\u0706\x03\x02" +
		"\x02\x02\u06DD\u06DB\x03\x02\x02\x02\u06DE\u06DF\x07\xBD\x02\x02\u06DF" +
		"\u06E6\x05&\x14\x02\u06E0\u06E2\x07\x03\x02\x02\u06E1\u06E0\x03\x02\x02" +
		"\x02\u06E1\u06E2\x03\x02\x02\x02\u06E2\u06E3\x03\x02\x02\x02\u06E3\u06E5" +
		"\x05&\x14\x02\u06E4\u06E1\x03\x02\x02\x02\u06E5\u06E8\x03\x02\x02\x02" +
		"\u06E6\u06E4\x03\x02\x02\x02\u06E6\u06E7\x03\x02\x02\x02\u06E7\u0706\x03" +
		"\x02\x02\x02\u06E8\u06E6\x03\x02\x02\x02\u06E9\u06EA\x07\xBE\x02\x02\u06EA" +
		"\u06F1\x05&\x14\x02\u06EB\u06ED\x07\x03\x02\x02\u06EC\u06EB\x03\x02\x02" +
		"\x02\u06EC\u06ED\x03\x02\x02\x02\u06ED\u06EE\x03\x02\x02\x02\u06EE\u06F0" +
		"\x05&\x14\x02\u06EF\u06EC\x03\x02\x02\x02\u06F0\u06F3\x03\x02\x02\x02" +
		"\u06F1\u06EF\x03\x02\x02\x02\u06F1\u06F2\x03\x02\x02\x02\u06F2\u0706\x03" +
		"\x02\x02\x02\u06F3\u06F1\x03\x02\x02\x02\u06F4\u06F5\x07\xBF\x02\x02\u06F5" +
		"\u06FC\x05(\x15\x02\u06F6\u06F8\x07\x03\x02\x02\u06F7\u06F6\x03\x02\x02" +
		"\x02\u06F7\u06F8\x03\x02\x02\x02\u06F8\u06F9\x03\x02\x02\x02\u06F9\u06FB" +
		"\x05(\x15\x02\u06FA\u06F7\x03\x02\x02\x02\u06FB\u06FE\x03\x02\x02\x02" +
		"\u06FC\u06FA\x03\x02\x02\x02\u06FC\u06FD\x03\x02\x02\x02\u06FD\u0706\x03" +
		"\x02\x02\x02\u06FE\u06FC\x03\x02\x02\x02\u06FF\u0700\x07\xC0\x02\x02\u0700" +
		"\u0706\x07\xC8\x02\x02\u0701\u0702\x07\xC1\x02\x02\u0702\u0706\x07\xC8" +
		"\x02\x02\u0703\u0704\x07\xC2\x02\x02\u0704\u0706\x07\xC6\x02\x02\u0705" +
		"\u06D3\x03\x02\x02\x02\u0705\u06DE\x03\x02\x02\x02\u0705\u06E9\x03\x02" +
		"\x02\x02\u0705\u06F4\x03\x02\x02\x02\u0705\u06FF\x03\x02\x02\x02\u0705" +
		"\u0701\x03\x02\x02\x02\u0705\u0703\x03\x02\x02\x02\u0706#\x03\x02\x02" +
		"\x02\u0707\u0709\x07\x06\x02\x02\u0708\u0707\x03\x02\x02\x02\u0708\u0709" +
		"\x03\x02\x02\x02\u0709\u070A\x03\x02\x02\x02\u070A\u072F\x07\xB3\x02\x02" +
		"\u070B\u070D\x07\x06\x02\x02\u070C\u070B\x03\x02\x02\x02\u070C\u070D\x03" +
		"\x02\x02\x02\u070D\u070E\x03\x02\x02\x02\u070E\u072F\x07\xB4\x02\x02\u070F" +
		"\u0711\x07\x06\x02\x02\u0710\u070F\x03\x02\x02\x02\u0710\u0711\x03\x02" +
		"\x02\x02\u0711\u0712\x03\x02\x02\x02\u0712\u072F\x07\xB5\x02\x02\u0713" +
		"\u0715\x07\x06\x02\x02\u0714\u0713\x03\x02\x02\x02\u0714\u0715\x03\x02" +
		"\x02\x02\u0715\u0716\x03\x02\x02\x02\u0716\u072F\x07\xB6\x02\x02\u0717" +
		"\u0718\x07\xB7\x02\x02\u0718\u071F\x07\xC9\x02\x02\u0719\u071B\x07\x03" +
		"\x02\x02\u071A\u0719\x03\x02\x02\x02\u071A\u071B\x03\x02\x02\x02\u071B" +
		"\u071C\x03\x02\x02\x02\u071C\u071E\x07\xC9\x02\x02\u071D\u071A\x03\x02" +
		"\x02\x02\u071E\u0721\x03\x02\x02\x02\u071F\u071D\x03\x02\x02\x02\u071F" +
		"\u0720\x03\x02\x02\x02\u0720\u072F\x03\x02\x02\x02\u0721\u071F\x03\x02" +
		"\x02\x02\u0722\u0723\x07\xB8\x02\x02\u0723\u072F\x07\xC6\x02\x02\u0724" +
		"\u0725\x07\xB9\x02\x02\u0725\u072F\x07\xC6\x02\x02\u0726\u0727\x07\xBA" +
		"\x02\x02\u0727\u072F\x07\xC8\x02\x02\u0728\u0729\x07\xBB\x02\x02\u0729" +
		"\u072B\x07\xC9\x02\x02\u072A\u072C\x07\x03\x02\x02\u072B\u072A\x03\x02" +
		"\x02\x02\u072B\u072C\x03\x02\x02\x02\u072C\u072D\x03\x02\x02\x02\u072D" +
		"\u072F\x05&\x14\x02\u072E\u0708\x03\x02\x02\x02\u072E\u070C\x03\x02\x02" +
		"\x02\u072E\u0710\x03\x02\x02\x02\u072E\u0714\x03\x02\x02\x02\u072E\u0717" +
		"\x03\x02\x02\x02\u072E\u0722\x03\x02\x02\x02\u072E\u0724\x03\x02\x02\x02" +
		"\u072E\u0726\x03\x02\x02\x02\u072E\u0728\x03\x02\x02\x02\u072F%\x03\x02" +
		"\x02\x02\u0730\u0731\b\x14\x01\x02\u0731\u0732\x07\x04\x02\x02\u0732\u0733" +
		"\x05&\x14\x02\u0733\u0734\x07\x05\x02\x02\u0734\u074A\x03\x02\x02\x02" +
		"\u0735\u0736\x07\xC7\x02\x02\u0736\u074A\x05&\x14\n\u0737\u074A\x07\xC6" +
		"\x02\x02\u0738\u074A\x07\xC9\x02\x02\u0739\u073A\x07\x07\x02\x02\u073A" +
		"\u073B\x07\x04\x02\x02\u073B\u073C\x07\xC9\x02\x02\u073C\u074A\x07\x05" +
		"\x02\x02\u073D\u073E\x07\b\x02\x02\u073E\u073F\x07\x04\x02\x02\u073F\u0740" +
		"\x07\xC9\x02\x02\u0740\u074A\x07\x05\x02\x02\u0741\u0742\x07\t\x02\x02" +
		"\u0742\u0743\x07\x04\x02\x02\u0743\u0744\x07\xC9\x02\x02\u0744\u074A\x07" +
		"\x05\x02\x02\u0745\u0746\x07\n\x02\x02\u0746\u0747\x07\x04\x02\x02\u0747" +
		"\u0748\x07\xC9\x02\x02\u0748\u074A\x07\x05\x02\x02\u0749\u0730\x03\x02" +
		"\x02\x02\u0749\u0735\x03\x02\x02\x02\u0749\u0737\x03\x02\x02\x02\u0749" +
		"\u0738\x03\x02\x02\x02\u0749\u0739\x03\x02\x02\x02\u0749\u073D\x03\x02" +
		"\x02\x02\u0749\u0741\x03\x02\x02\x02\u0749\u0745\x03\x02\x02\x02\u074A" +
		"\u0750\x03\x02\x02\x02\u074B\u074C\f\t\x02\x02\u074C\u074D\x07\xC7\x02" +
		"\x02\u074D\u074F\x05&\x14\n\u074E\u074B\x03\x02\x02\x02\u074F\u0752\x03" +
		"\x02\x02\x02\u0750\u074E\x03\x02\x02\x02\u0750\u0751\x03\x02\x02\x02\u0751" +
		"\'\x03\x02\x02\x02\u0752\u0750\x03\x02\x02\x02\u0753\u0754\x07\x04\x02" +
		"\x02\u0754\u0755\x05(\x15\x02\u0755\u0756\x07\x05\x02\x02\u0756\u0760" +
		"\x03\x02\x02\x02\u0757\u0758\x07\xC7\x02\x02\u0758\u0760\x05(\x15\x02" +
		"\u0759\u075A\x05&\x14\x02\u075A\u075B\x07\xC7\x02\x02\u075B\u075C\x05" +
		"&\x14\x02\u075C\u0760\x03\x02\x02\x02\u075D\u0760\x07\xC5\x02\x02\u075E" +
		"\u0760\x07\xC6\x02\x02\u075F\u0753\x03\x02\x02\x02\u075F\u0757\x03\x02" +
		"\x02\x02\u075F\u0759\x03\x02\x02\x02\u075F\u075D\x03\x02\x02\x02\u075F" +
		"\u075E\x03\x02\x02\x02\u0760)\x03\x02\x02\x02\u015E-6BQV\\bhlty}\x83\x87" +
		"\x8D\x91\x97\x9B\xA1\xA5\xAB\xAF\xB5\xB9\xC1\xC6\xCA\xD2\xD7\xDB\xE3\xE8" +
		"\xEC\xF4\xF9\xFD\u0105\u010A\u010E\u0116\u011B\u011F\u0127\u012C\u0130" +
		"\u0138\u013D\u0141\u0147\u014B\u0151\u0155\u015B\u015F\u0165\u0169\u016F" +
		"\u0173\u0179\u017D\u0183\u0187\u018D\u0191\u0197\u019B\u01A1\u01A5\u01AB" +
		"\u01AF\u01B5\u01B9\u01BF\u01C3\u01C9\u01CD\u01D3\u01D7\u01DD\u01E1\u01E7" +
		"\u01EB\u01F1\u01F5\u01FB\u0202\u0206\u020D\u0211\u0218\u021C\u0223\u0227" +
		"\u022E\u0232\u0239\u023D\u0241\u0246\u024A\u0250\u0254\u025A\u025E\u0264" +
		"\u0268\u026E\u0272\u0278\u027C\u0282\u0286\u028C\u0290\u0293\u0298\u029B" +
		"\u029F\u02A4\u02A8\u02AB\u02AF\u02B4\u02B8\u02BB\u02BF\u02C4\u02C8\u02CB" +
		"\u02CF\u02D4\u02D8\u02DB\u02DF\u02E4\u02E8\u02EB\u02EF\u02F4\u02F8\u02FB" +
		"\u02FF\u0304\u0308\u030B\u030F\u0314\u0318\u031B\u031F\u0324\u0328\u032B" +
		"\u032F\u0334\u0338\u033B\u033F\u0341\u0346\u034A\u0352\u0357\u035B\u0360" +
		"\u0367\u036C\u0370\u0374\u037A\u037E\u0382\u0388\u038C\u0390\u0396\u039A" +
		"\u039E\u03A4\u03A8\u03AE\u03B2\u03B8\u03BC\u03C2\u03C6\u03CC\u03D2\u03D6" +
		"\u03DC\u03E0\u03E6\u03EA\u03F0\u03F4\u03FA\u03FE\u0404\u040A\u0410\u0416" +
		"\u041C\u0420\u0426\u042A\u0430\u0434\u043A\u0440\u0446\u044C\u0452\u0455" +
		"\u045A\u045E\u0466\u046B\u046F\u0474\u047B\u0480\u0484\u0488\u048E\u0492" +
		"\u0496\u049C\u04A0\u04A4\u04AA\u04AE\u04B2\u04B8\u04BC\u04C2\u04C6\u04CC" +
		"\u04D0\u04D6\u04DA\u04E0\u04E6\u04EA\u04F0\u04F4\u04FA\u04FE\u0504\u0508" +
		"\u050E\u0512\u0518\u051E\u0524\u0528\u052E\u0532\u0538\u053C\u0542\u0548" +
		"\u054E\u0554\u055A\u055D\u0562\u0568\u056E\u0574\u057A\u0580\u0584\u058A" +
		"\u058E\u0594\u0598\u059F\u05A5\u05AB\u05B1\u05B7\u05BD\u05C3\u05C9\u05CF" +
		"\u05D5\u05DB\u05E1\u05E7\u05ED\u05F3\u05F7\u05FD\u0601\u0607\u060B\u0611" +
		"\u0615\u0623\u0628\u062B\u0636\u063C\u0643\u064A\u0651\u0658\u065F\u066A" +
		"\u0674\u067E\u0681\u0686\u068A\u0690\u0694\u069A\u06A0\u06A6\u06A9\u06AE" +
		"\u06B2\u06B8\u06BC\u06C2\u06C8\u06CE\u06D1\u06D6\u06DB\u06E1\u06E6\u06EC" +
		"\u06F1\u06F7\u06FC\u0705\u0708\u070C\u0710\u0714\u071A\u071F\u072B\u072E" +
		"\u0749\u0750\u075F";
	public static readonly _serializedATN: string = Utils.join(
		[
			RISCVParser._serializedATNSegment0,
			RISCVParser._serializedATNSegment1,
			RISCVParser._serializedATNSegment2,
			RISCVParser._serializedATNSegment3,
		],
		"",
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!RISCVParser.__ATN) {
			RISCVParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(RISCVParser._serializedATN));
		}

		return RISCVParser.__ATN;
	}

}

export class ProgContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(RISCVParser.EOF, 0); }
	public line(): LineContext[];
	public line(i: number): LineContext;
	public line(i?: number): LineContext | LineContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LineContext);
		} else {
			return this.getRuleContext(i, LineContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RISCVParser.RULE_prog; }
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterProg) {
			listener.enterProg(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitProg) {
			listener.exitProg(this);
		}
	}
}


export class LineContext extends ParserRuleContext {
	public stmt(): StmtContext | undefined {
		return this.tryGetRuleContext(0, StmtContext);
	}
	public EOL(): TerminalNode { return this.getToken(RISCVParser.EOL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RISCVParser.RULE_line; }
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterLine) {
			listener.enterLine(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitLine) {
			listener.exitLine(this);
		}
	}
}


export class StmtContext extends ParserRuleContext {
	public label_def(): Label_defContext | undefined {
		return this.tryGetRuleContext(0, Label_defContext);
	}
	public static_data(): Static_dataContext | undefined {
		return this.tryGetRuleContext(0, Static_dataContext);
	}
	public instruction(): InstructionContext | undefined {
		return this.tryGetRuleContext(0, InstructionContext);
	}
	public directive(): DirectiveContext | undefined {
		return this.tryGetRuleContext(0, DirectiveContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RISCVParser.RULE_stmt; }
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterStmt) {
			listener.enterStmt(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitStmt) {
			listener.exitStmt(this);
		}
	}
}


export class Label_defContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RISCVParser.RULE_label_def; }
	public copyFrom(ctx: Label_defContext): void {
		super.copyFrom(ctx);
	}
}
export class LABELContext extends Label_defContext {
	public LABEL(): TerminalNode { return this.getToken(RISCVParser.LABEL, 0); }
	constructor(ctx: Label_defContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterLABEL) {
			listener.enterLABEL(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitLABEL) {
			listener.exitLABEL(this);
		}
	}
}


export class InstructionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RISCVParser.RULE_instruction; }
	public copyFrom(ctx: InstructionContext): void {
		super.copyFrom(ctx);
	}
}
export class RV32IContext extends InstructionContext {
	public rv32i_ext(): Rv32i_extContext {
		return this.getRuleContext(0, Rv32i_extContext);
	}
	constructor(ctx: InstructionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterRV32I) {
			listener.enterRV32I(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitRV32I) {
			listener.exitRV32I(this);
		}
	}
}
export class RV32ZifenceiContext extends InstructionContext {
	public rv32zifencei_ext(): Rv32zifencei_extContext {
		return this.getRuleContext(0, Rv32zifencei_extContext);
	}
	constructor(ctx: InstructionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterRV32Zifencei) {
			listener.enterRV32Zifencei(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitRV32Zifencei) {
			listener.exitRV32Zifencei(this);
		}
	}
}
export class RV32ZicsrContext extends InstructionContext {
	public rv32zicsr_ext(): Rv32zicsr_extContext {
		return this.getRuleContext(0, Rv32zicsr_extContext);
	}
	constructor(ctx: InstructionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterRV32Zicsr) {
			listener.enterRV32Zicsr(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitRV32Zicsr) {
			listener.exitRV32Zicsr(this);
		}
	}
}
export class RV32MContext extends InstructionContext {
	public rv32m_ext(): Rv32m_extContext {
		return this.getRuleContext(0, Rv32m_extContext);
	}
	constructor(ctx: InstructionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterRV32M) {
			listener.enterRV32M(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitRV32M) {
			listener.exitRV32M(this);
		}
	}
}
export class RV32AContext extends InstructionContext {
	public rv32a_ext(): Rv32a_extContext {
		return this.getRuleContext(0, Rv32a_extContext);
	}
	constructor(ctx: InstructionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterRV32A) {
			listener.enterRV32A(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitRV32A) {
			listener.exitRV32A(this);
		}
	}
}
export class RV32FContext extends InstructionContext {
	public rv32f_ext(): Rv32f_extContext {
		return this.getRuleContext(0, Rv32f_extContext);
	}
	constructor(ctx: InstructionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterRV32F) {
			listener.enterRV32F(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitRV32F) {
			listener.exitRV32F(this);
		}
	}
}
export class RV32DContext extends InstructionContext {
	public rv32d_ext(): Rv32d_extContext {
		return this.getRuleContext(0, Rv32d_extContext);
	}
	constructor(ctx: InstructionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterRV32D) {
			listener.enterRV32D(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitRV32D) {
			listener.exitRV32D(this);
		}
	}
}
export class RV32IPSEUDOSContext extends InstructionContext {
	public rv32i_ext_pseudos(): Rv32i_ext_pseudosContext {
		return this.getRuleContext(0, Rv32i_ext_pseudosContext);
	}
	constructor(ctx: InstructionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterRV32IPSEUDOS) {
			listener.enterRV32IPSEUDOS(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitRV32IPSEUDOS) {
			listener.exitRV32IPSEUDOS(this);
		}
	}
}
export class RV32ZicsrPSEUDOSContext extends InstructionContext {
	public rv32zicsr_ext_pseudos(): Rv32zicsr_ext_pseudosContext {
		return this.getRuleContext(0, Rv32zicsr_ext_pseudosContext);
	}
	constructor(ctx: InstructionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterRV32ZicsrPSEUDOS) {
			listener.enterRV32ZicsrPSEUDOS(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitRV32ZicsrPSEUDOS) {
			listener.exitRV32ZicsrPSEUDOS(this);
		}
	}
}
export class RV32FPSEUDOSContext extends InstructionContext {
	public rv32f_ext_pseudos(): Rv32f_ext_pseudosContext {
		return this.getRuleContext(0, Rv32f_ext_pseudosContext);
	}
	constructor(ctx: InstructionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterRV32FPSEUDOS) {
			listener.enterRV32FPSEUDOS(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitRV32FPSEUDOS) {
			listener.exitRV32FPSEUDOS(this);
		}
	}
}
export class RV32DPSEUDOSContext extends InstructionContext {
	public rv32d_ext_pseudos(): Rv32d_ext_pseudosContext {
		return this.getRuleContext(0, Rv32d_ext_pseudosContext);
	}
	constructor(ctx: InstructionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterRV32DPSEUDOS) {
			listener.enterRV32DPSEUDOS(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitRV32DPSEUDOS) {
			listener.exitRV32DPSEUDOS(this);
		}
	}
}


export class Rv32i_extContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RISCVParser.RULE_rv32i_ext; }
	public copyFrom(ctx: Rv32i_extContext): void {
		super.copyFrom(ctx);
	}
}
export class LUIContext extends Rv32i_extContext {
	public I_LUI(): TerminalNode { return this.getToken(RISCVParser.I_LUI, 0); }
	public XREG(): TerminalNode { return this.getToken(RISCVParser.XREG, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: Rv32i_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterLUI) {
			listener.enterLUI(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitLUI) {
			listener.exitLUI(this);
		}
	}
}
export class AUIPCContext extends Rv32i_extContext {
	public I_AUIPC(): TerminalNode { return this.getToken(RISCVParser.I_AUIPC, 0); }
	public XREG(): TerminalNode { return this.getToken(RISCVParser.XREG, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: Rv32i_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterAUIPC) {
			listener.enterAUIPC(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitAUIPC) {
			listener.exitAUIPC(this);
		}
	}
}
export class JALContext extends Rv32i_extContext {
	public I_JAL(): TerminalNode { return this.getToken(RISCVParser.I_JAL, 0); }
	public XREG(): TerminalNode { return this.getToken(RISCVParser.XREG, 0); }
	public ID(): TerminalNode { return this.getToken(RISCVParser.ID, 0); }
	constructor(ctx: Rv32i_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterJAL) {
			listener.enterJAL(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitJAL) {
			listener.exitJAL(this);
		}
	}
}
export class JALRContext extends Rv32i_extContext {
	public I_JALR(): TerminalNode { return this.getToken(RISCVParser.I_JALR, 0); }
	public XREG(): TerminalNode[];
	public XREG(i: number): TerminalNode;
	public XREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.XREG);
		} else {
			return this.getToken(RISCVParser.XREG, i);
		}
	}
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	constructor(ctx: Rv32i_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterJALR) {
			listener.enterJALR(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitJALR) {
			listener.exitJALR(this);
		}
	}
}
export class BEQContext extends Rv32i_extContext {
	public I_BEQ(): TerminalNode { return this.getToken(RISCVParser.I_BEQ, 0); }
	public XREG(): TerminalNode[];
	public XREG(i: number): TerminalNode;
	public XREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.XREG);
		} else {
			return this.getToken(RISCVParser.XREG, i);
		}
	}
	public ID(): TerminalNode { return this.getToken(RISCVParser.ID, 0); }
	constructor(ctx: Rv32i_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterBEQ) {
			listener.enterBEQ(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitBEQ) {
			listener.exitBEQ(this);
		}
	}
}
export class BNEContext extends Rv32i_extContext {
	public I_BNE(): TerminalNode { return this.getToken(RISCVParser.I_BNE, 0); }
	public XREG(): TerminalNode[];
	public XREG(i: number): TerminalNode;
	public XREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.XREG);
		} else {
			return this.getToken(RISCVParser.XREG, i);
		}
	}
	public ID(): TerminalNode { return this.getToken(RISCVParser.ID, 0); }
	constructor(ctx: Rv32i_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterBNE) {
			listener.enterBNE(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitBNE) {
			listener.exitBNE(this);
		}
	}
}
export class BLTContext extends Rv32i_extContext {
	public I_BLT(): TerminalNode { return this.getToken(RISCVParser.I_BLT, 0); }
	public XREG(): TerminalNode[];
	public XREG(i: number): TerminalNode;
	public XREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.XREG);
		} else {
			return this.getToken(RISCVParser.XREG, i);
		}
	}
	public ID(): TerminalNode { return this.getToken(RISCVParser.ID, 0); }
	constructor(ctx: Rv32i_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterBLT) {
			listener.enterBLT(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitBLT) {
			listener.exitBLT(this);
		}
	}
}
export class BGEContext extends Rv32i_extContext {
	public I_BGE(): TerminalNode { return this.getToken(RISCVParser.I_BGE, 0); }
	public XREG(): TerminalNode[];
	public XREG(i: number): TerminalNode;
	public XREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.XREG);
		} else {
			return this.getToken(RISCVParser.XREG, i);
		}
	}
	public ID(): TerminalNode { return this.getToken(RISCVParser.ID, 0); }
	constructor(ctx: Rv32i_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterBGE) {
			listener.enterBGE(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitBGE) {
			listener.exitBGE(this);
		}
	}
}
export class BLTUContext extends Rv32i_extContext {
	public I_BLTU(): TerminalNode { return this.getToken(RISCVParser.I_BLTU, 0); }
	public XREG(): TerminalNode[];
	public XREG(i: number): TerminalNode;
	public XREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.XREG);
		} else {
			return this.getToken(RISCVParser.XREG, i);
		}
	}
	public ID(): TerminalNode { return this.getToken(RISCVParser.ID, 0); }
	constructor(ctx: Rv32i_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterBLTU) {
			listener.enterBLTU(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitBLTU) {
			listener.exitBLTU(this);
		}
	}
}
export class BGEUContext extends Rv32i_extContext {
	public I_BGEU(): TerminalNode { return this.getToken(RISCVParser.I_BGEU, 0); }
	public XREG(): TerminalNode[];
	public XREG(i: number): TerminalNode;
	public XREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.XREG);
		} else {
			return this.getToken(RISCVParser.XREG, i);
		}
	}
	public ID(): TerminalNode { return this.getToken(RISCVParser.ID, 0); }
	constructor(ctx: Rv32i_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterBGEU) {
			listener.enterBGEU(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitBGEU) {
			listener.exitBGEU(this);
		}
	}
}
export class LBContext extends Rv32i_extContext {
	public I_LB(): TerminalNode { return this.getToken(RISCVParser.I_LB, 0); }
	public XREG(): TerminalNode[];
	public XREG(i: number): TerminalNode;
	public XREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.XREG);
		} else {
			return this.getToken(RISCVParser.XREG, i);
		}
	}
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	constructor(ctx: Rv32i_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterLB) {
			listener.enterLB(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitLB) {
			listener.exitLB(this);
		}
	}
}
export class LHContext extends Rv32i_extContext {
	public I_LH(): TerminalNode { return this.getToken(RISCVParser.I_LH, 0); }
	public XREG(): TerminalNode[];
	public XREG(i: number): TerminalNode;
	public XREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.XREG);
		} else {
			return this.getToken(RISCVParser.XREG, i);
		}
	}
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	constructor(ctx: Rv32i_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterLH) {
			listener.enterLH(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitLH) {
			listener.exitLH(this);
		}
	}
}
export class LWContext extends Rv32i_extContext {
	public I_LW(): TerminalNode { return this.getToken(RISCVParser.I_LW, 0); }
	public XREG(): TerminalNode[];
	public XREG(i: number): TerminalNode;
	public XREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.XREG);
		} else {
			return this.getToken(RISCVParser.XREG, i);
		}
	}
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	constructor(ctx: Rv32i_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterLW) {
			listener.enterLW(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitLW) {
			listener.exitLW(this);
		}
	}
}
export class LBUContext extends Rv32i_extContext {
	public I_LBU(): TerminalNode { return this.getToken(RISCVParser.I_LBU, 0); }
	public XREG(): TerminalNode[];
	public XREG(i: number): TerminalNode;
	public XREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.XREG);
		} else {
			return this.getToken(RISCVParser.XREG, i);
		}
	}
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	constructor(ctx: Rv32i_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterLBU) {
			listener.enterLBU(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitLBU) {
			listener.exitLBU(this);
		}
	}
}
export class LHUContext extends Rv32i_extContext {
	public I_LHU(): TerminalNode { return this.getToken(RISCVParser.I_LHU, 0); }
	public XREG(): TerminalNode[];
	public XREG(i: number): TerminalNode;
	public XREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.XREG);
		} else {
			return this.getToken(RISCVParser.XREG, i);
		}
	}
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	constructor(ctx: Rv32i_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterLHU) {
			listener.enterLHU(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitLHU) {
			listener.exitLHU(this);
		}
	}
}
export class SBContext extends Rv32i_extContext {
	public I_SB(): TerminalNode { return this.getToken(RISCVParser.I_SB, 0); }
	public XREG(): TerminalNode[];
	public XREG(i: number): TerminalNode;
	public XREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.XREG);
		} else {
			return this.getToken(RISCVParser.XREG, i);
		}
	}
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	constructor(ctx: Rv32i_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterSB) {
			listener.enterSB(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitSB) {
			listener.exitSB(this);
		}
	}
}
export class SHContext extends Rv32i_extContext {
	public I_SH(): TerminalNode { return this.getToken(RISCVParser.I_SH, 0); }
	public XREG(): TerminalNode[];
	public XREG(i: number): TerminalNode;
	public XREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.XREG);
		} else {
			return this.getToken(RISCVParser.XREG, i);
		}
	}
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	constructor(ctx: Rv32i_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterSH) {
			listener.enterSH(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitSH) {
			listener.exitSH(this);
		}
	}
}
export class SWContext extends Rv32i_extContext {
	public I_SW(): TerminalNode { return this.getToken(RISCVParser.I_SW, 0); }
	public XREG(): TerminalNode[];
	public XREG(i: number): TerminalNode;
	public XREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.XREG);
		} else {
			return this.getToken(RISCVParser.XREG, i);
		}
	}
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	constructor(ctx: Rv32i_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterSW) {
			listener.enterSW(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitSW) {
			listener.exitSW(this);
		}
	}
}
export class ADDIContext extends Rv32i_extContext {
	public I_ADDI(): TerminalNode { return this.getToken(RISCVParser.I_ADDI, 0); }
	public XREG(): TerminalNode[];
	public XREG(i: number): TerminalNode;
	public XREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.XREG);
		} else {
			return this.getToken(RISCVParser.XREG, i);
		}
	}
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: Rv32i_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterADDI) {
			listener.enterADDI(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitADDI) {
			listener.exitADDI(this);
		}
	}
}
export class SLTIContext extends Rv32i_extContext {
	public I_SLTI(): TerminalNode { return this.getToken(RISCVParser.I_SLTI, 0); }
	public XREG(): TerminalNode[];
	public XREG(i: number): TerminalNode;
	public XREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.XREG);
		} else {
			return this.getToken(RISCVParser.XREG, i);
		}
	}
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: Rv32i_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterSLTI) {
			listener.enterSLTI(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitSLTI) {
			listener.exitSLTI(this);
		}
	}
}
export class SLTIUContext extends Rv32i_extContext {
	public I_SLTIU(): TerminalNode { return this.getToken(RISCVParser.I_SLTIU, 0); }
	public XREG(): TerminalNode[];
	public XREG(i: number): TerminalNode;
	public XREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.XREG);
		} else {
			return this.getToken(RISCVParser.XREG, i);
		}
	}
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: Rv32i_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterSLTIU) {
			listener.enterSLTIU(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitSLTIU) {
			listener.exitSLTIU(this);
		}
	}
}
export class XORIContext extends Rv32i_extContext {
	public I_XORI(): TerminalNode { return this.getToken(RISCVParser.I_XORI, 0); }
	public XREG(): TerminalNode[];
	public XREG(i: number): TerminalNode;
	public XREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.XREG);
		} else {
			return this.getToken(RISCVParser.XREG, i);
		}
	}
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: Rv32i_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterXORI) {
			listener.enterXORI(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitXORI) {
			listener.exitXORI(this);
		}
	}
}
export class ORIContext extends Rv32i_extContext {
	public I_ORI(): TerminalNode { return this.getToken(RISCVParser.I_ORI, 0); }
	public XREG(): TerminalNode[];
	public XREG(i: number): TerminalNode;
	public XREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.XREG);
		} else {
			return this.getToken(RISCVParser.XREG, i);
		}
	}
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: Rv32i_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterORI) {
			listener.enterORI(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitORI) {
			listener.exitORI(this);
		}
	}
}
export class ANDIContext extends Rv32i_extContext {
	public I_ANDI(): TerminalNode { return this.getToken(RISCVParser.I_ANDI, 0); }
	public XREG(): TerminalNode[];
	public XREG(i: number): TerminalNode;
	public XREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.XREG);
		} else {
			return this.getToken(RISCVParser.XREG, i);
		}
	}
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: Rv32i_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterANDI) {
			listener.enterANDI(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitANDI) {
			listener.exitANDI(this);
		}
	}
}
export class SLLIContext extends Rv32i_extContext {
	public I_SLLI(): TerminalNode { return this.getToken(RISCVParser.I_SLLI, 0); }
	public XREG(): TerminalNode[];
	public XREG(i: number): TerminalNode;
	public XREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.XREG);
		} else {
			return this.getToken(RISCVParser.XREG, i);
		}
	}
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: Rv32i_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterSLLI) {
			listener.enterSLLI(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitSLLI) {
			listener.exitSLLI(this);
		}
	}
}
export class SRLIContext extends Rv32i_extContext {
	public I_SRLI(): TerminalNode { return this.getToken(RISCVParser.I_SRLI, 0); }
	public XREG(): TerminalNode[];
	public XREG(i: number): TerminalNode;
	public XREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.XREG);
		} else {
			return this.getToken(RISCVParser.XREG, i);
		}
	}
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: Rv32i_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterSRLI) {
			listener.enterSRLI(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitSRLI) {
			listener.exitSRLI(this);
		}
	}
}
export class SRAIContext extends Rv32i_extContext {
	public I_SRAI(): TerminalNode { return this.getToken(RISCVParser.I_SRAI, 0); }
	public XREG(): TerminalNode[];
	public XREG(i: number): TerminalNode;
	public XREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.XREG);
		} else {
			return this.getToken(RISCVParser.XREG, i);
		}
	}
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: Rv32i_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterSRAI) {
			listener.enterSRAI(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitSRAI) {
			listener.exitSRAI(this);
		}
	}
}
export class ADDContext extends Rv32i_extContext {
	public I_ADD(): TerminalNode { return this.getToken(RISCVParser.I_ADD, 0); }
	public XREG(): TerminalNode[];
	public XREG(i: number): TerminalNode;
	public XREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.XREG);
		} else {
			return this.getToken(RISCVParser.XREG, i);
		}
	}
	constructor(ctx: Rv32i_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterADD) {
			listener.enterADD(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitADD) {
			listener.exitADD(this);
		}
	}
}
export class SUBContext extends Rv32i_extContext {
	public I_SUB(): TerminalNode { return this.getToken(RISCVParser.I_SUB, 0); }
	public XREG(): TerminalNode[];
	public XREG(i: number): TerminalNode;
	public XREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.XREG);
		} else {
			return this.getToken(RISCVParser.XREG, i);
		}
	}
	constructor(ctx: Rv32i_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterSUB) {
			listener.enterSUB(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitSUB) {
			listener.exitSUB(this);
		}
	}
}
export class SLLContext extends Rv32i_extContext {
	public I_SLL(): TerminalNode { return this.getToken(RISCVParser.I_SLL, 0); }
	public XREG(): TerminalNode[];
	public XREG(i: number): TerminalNode;
	public XREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.XREG);
		} else {
			return this.getToken(RISCVParser.XREG, i);
		}
	}
	constructor(ctx: Rv32i_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterSLL) {
			listener.enterSLL(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitSLL) {
			listener.exitSLL(this);
		}
	}
}
export class SLTContext extends Rv32i_extContext {
	public I_SLT(): TerminalNode { return this.getToken(RISCVParser.I_SLT, 0); }
	public XREG(): TerminalNode[];
	public XREG(i: number): TerminalNode;
	public XREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.XREG);
		} else {
			return this.getToken(RISCVParser.XREG, i);
		}
	}
	constructor(ctx: Rv32i_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterSLT) {
			listener.enterSLT(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitSLT) {
			listener.exitSLT(this);
		}
	}
}
export class SLTUContext extends Rv32i_extContext {
	public I_SLTU(): TerminalNode { return this.getToken(RISCVParser.I_SLTU, 0); }
	public XREG(): TerminalNode[];
	public XREG(i: number): TerminalNode;
	public XREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.XREG);
		} else {
			return this.getToken(RISCVParser.XREG, i);
		}
	}
	constructor(ctx: Rv32i_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterSLTU) {
			listener.enterSLTU(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitSLTU) {
			listener.exitSLTU(this);
		}
	}
}
export class XORContext extends Rv32i_extContext {
	public I_XOR(): TerminalNode { return this.getToken(RISCVParser.I_XOR, 0); }
	public XREG(): TerminalNode[];
	public XREG(i: number): TerminalNode;
	public XREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.XREG);
		} else {
			return this.getToken(RISCVParser.XREG, i);
		}
	}
	constructor(ctx: Rv32i_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterXOR) {
			listener.enterXOR(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitXOR) {
			listener.exitXOR(this);
		}
	}
}
export class SRLContext extends Rv32i_extContext {
	public I_SRL(): TerminalNode { return this.getToken(RISCVParser.I_SRL, 0); }
	public XREG(): TerminalNode[];
	public XREG(i: number): TerminalNode;
	public XREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.XREG);
		} else {
			return this.getToken(RISCVParser.XREG, i);
		}
	}
	constructor(ctx: Rv32i_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterSRL) {
			listener.enterSRL(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitSRL) {
			listener.exitSRL(this);
		}
	}
}
export class SRAContext extends Rv32i_extContext {
	public I_SRA(): TerminalNode { return this.getToken(RISCVParser.I_SRA, 0); }
	public XREG(): TerminalNode[];
	public XREG(i: number): TerminalNode;
	public XREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.XREG);
		} else {
			return this.getToken(RISCVParser.XREG, i);
		}
	}
	constructor(ctx: Rv32i_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterSRA) {
			listener.enterSRA(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitSRA) {
			listener.exitSRA(this);
		}
	}
}
export class ORContext extends Rv32i_extContext {
	public I_OR(): TerminalNode { return this.getToken(RISCVParser.I_OR, 0); }
	public XREG(): TerminalNode[];
	public XREG(i: number): TerminalNode;
	public XREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.XREG);
		} else {
			return this.getToken(RISCVParser.XREG, i);
		}
	}
	constructor(ctx: Rv32i_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterOR) {
			listener.enterOR(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitOR) {
			listener.exitOR(this);
		}
	}
}
export class ANDContext extends Rv32i_extContext {
	public I_AND(): TerminalNode { return this.getToken(RISCVParser.I_AND, 0); }
	public XREG(): TerminalNode[];
	public XREG(i: number): TerminalNode;
	public XREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.XREG);
		} else {
			return this.getToken(RISCVParser.XREG, i);
		}
	}
	constructor(ctx: Rv32i_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterAND) {
			listener.enterAND(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitAND) {
			listener.exitAND(this);
		}
	}
}
export class FENCEContext extends Rv32i_extContext {
	public I_FENCE(): TerminalNode { return this.getToken(RISCVParser.I_FENCE, 0); }
	constructor(ctx: Rv32i_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterFENCE) {
			listener.enterFENCE(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitFENCE) {
			listener.exitFENCE(this);
		}
	}
}
export class ECALLContext extends Rv32i_extContext {
	public I_ECALL(): TerminalNode { return this.getToken(RISCVParser.I_ECALL, 0); }
	constructor(ctx: Rv32i_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterECALL) {
			listener.enterECALL(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitECALL) {
			listener.exitECALL(this);
		}
	}
}
export class EBREAKContext extends Rv32i_extContext {
	public I_EBREAK(): TerminalNode { return this.getToken(RISCVParser.I_EBREAK, 0); }
	constructor(ctx: Rv32i_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterEBREAK) {
			listener.enterEBREAK(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitEBREAK) {
			listener.exitEBREAK(this);
		}
	}
}


export class Rv32zifencei_extContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RISCVParser.RULE_rv32zifencei_ext; }
	public copyFrom(ctx: Rv32zifencei_extContext): void {
		super.copyFrom(ctx);
	}
}
export class FENCEIContext extends Rv32zifencei_extContext {
	public I_FENCEI(): TerminalNode { return this.getToken(RISCVParser.I_FENCEI, 0); }
	constructor(ctx: Rv32zifencei_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterFENCEI) {
			listener.enterFENCEI(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitFENCEI) {
			listener.exitFENCEI(this);
		}
	}
}


export class Rv32zicsr_extContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RISCVParser.RULE_rv32zicsr_ext; }
	public copyFrom(ctx: Rv32zicsr_extContext): void {
		super.copyFrom(ctx);
	}
}
export class CSRRWContext extends Rv32zicsr_extContext {
	public I_CSRRW(): TerminalNode { return this.getToken(RISCVParser.I_CSRRW, 0); }
	public XREG(): TerminalNode[];
	public XREG(i: number): TerminalNode;
	public XREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.XREG);
		} else {
			return this.getToken(RISCVParser.XREG, i);
		}
	}
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: Rv32zicsr_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterCSRRW) {
			listener.enterCSRRW(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitCSRRW) {
			listener.exitCSRRW(this);
		}
	}
}
export class CSRRSContext extends Rv32zicsr_extContext {
	public I_CSRRS(): TerminalNode { return this.getToken(RISCVParser.I_CSRRS, 0); }
	public XREG(): TerminalNode[];
	public XREG(i: number): TerminalNode;
	public XREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.XREG);
		} else {
			return this.getToken(RISCVParser.XREG, i);
		}
	}
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: Rv32zicsr_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterCSRRS) {
			listener.enterCSRRS(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitCSRRS) {
			listener.exitCSRRS(this);
		}
	}
}
export class CSRRCContext extends Rv32zicsr_extContext {
	public I_CSRRC(): TerminalNode { return this.getToken(RISCVParser.I_CSRRC, 0); }
	public XREG(): TerminalNode[];
	public XREG(i: number): TerminalNode;
	public XREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.XREG);
		} else {
			return this.getToken(RISCVParser.XREG, i);
		}
	}
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: Rv32zicsr_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterCSRRC) {
			listener.enterCSRRC(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitCSRRC) {
			listener.exitCSRRC(this);
		}
	}
}
export class CSRRWIContext extends Rv32zicsr_extContext {
	public I_CSRRWI(): TerminalNode { return this.getToken(RISCVParser.I_CSRRWI, 0); }
	public XREG(): TerminalNode { return this.getToken(RISCVParser.XREG, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public INT(): TerminalNode { return this.getToken(RISCVParser.INT, 0); }
	constructor(ctx: Rv32zicsr_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterCSRRWI) {
			listener.enterCSRRWI(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitCSRRWI) {
			listener.exitCSRRWI(this);
		}
	}
}
export class CSRRSIContext extends Rv32zicsr_extContext {
	public I_CSRRSI(): TerminalNode { return this.getToken(RISCVParser.I_CSRRSI, 0); }
	public XREG(): TerminalNode { return this.getToken(RISCVParser.XREG, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public INT(): TerminalNode { return this.getToken(RISCVParser.INT, 0); }
	constructor(ctx: Rv32zicsr_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterCSRRSI) {
			listener.enterCSRRSI(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitCSRRSI) {
			listener.exitCSRRSI(this);
		}
	}
}
export class CSRRCIContext extends Rv32zicsr_extContext {
	public I_CSRRCI(): TerminalNode { return this.getToken(RISCVParser.I_CSRRCI, 0); }
	public XREG(): TerminalNode { return this.getToken(RISCVParser.XREG, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public INT(): TerminalNode { return this.getToken(RISCVParser.INT, 0); }
	constructor(ctx: Rv32zicsr_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterCSRRCI) {
			listener.enterCSRRCI(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitCSRRCI) {
			listener.exitCSRRCI(this);
		}
	}
}


export class Rv32m_extContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RISCVParser.RULE_rv32m_ext; }
	public copyFrom(ctx: Rv32m_extContext): void {
		super.copyFrom(ctx);
	}
}
export class MULContext extends Rv32m_extContext {
	public I_MUL(): TerminalNode { return this.getToken(RISCVParser.I_MUL, 0); }
	public XREG(): TerminalNode[];
	public XREG(i: number): TerminalNode;
	public XREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.XREG);
		} else {
			return this.getToken(RISCVParser.XREG, i);
		}
	}
	constructor(ctx: Rv32m_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterMUL) {
			listener.enterMUL(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitMUL) {
			listener.exitMUL(this);
		}
	}
}
export class MULHContext extends Rv32m_extContext {
	public I_MULH(): TerminalNode { return this.getToken(RISCVParser.I_MULH, 0); }
	public XREG(): TerminalNode[];
	public XREG(i: number): TerminalNode;
	public XREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.XREG);
		} else {
			return this.getToken(RISCVParser.XREG, i);
		}
	}
	constructor(ctx: Rv32m_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterMULH) {
			listener.enterMULH(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitMULH) {
			listener.exitMULH(this);
		}
	}
}
export class MULHSUContext extends Rv32m_extContext {
	public I_MULHSU(): TerminalNode { return this.getToken(RISCVParser.I_MULHSU, 0); }
	public XREG(): TerminalNode[];
	public XREG(i: number): TerminalNode;
	public XREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.XREG);
		} else {
			return this.getToken(RISCVParser.XREG, i);
		}
	}
	constructor(ctx: Rv32m_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterMULHSU) {
			listener.enterMULHSU(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitMULHSU) {
			listener.exitMULHSU(this);
		}
	}
}
export class MULHUContext extends Rv32m_extContext {
	public I_MULHU(): TerminalNode { return this.getToken(RISCVParser.I_MULHU, 0); }
	public XREG(): TerminalNode[];
	public XREG(i: number): TerminalNode;
	public XREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.XREG);
		} else {
			return this.getToken(RISCVParser.XREG, i);
		}
	}
	constructor(ctx: Rv32m_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterMULHU) {
			listener.enterMULHU(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitMULHU) {
			listener.exitMULHU(this);
		}
	}
}
export class DIVContext extends Rv32m_extContext {
	public I_DIV(): TerminalNode { return this.getToken(RISCVParser.I_DIV, 0); }
	public XREG(): TerminalNode[];
	public XREG(i: number): TerminalNode;
	public XREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.XREG);
		} else {
			return this.getToken(RISCVParser.XREG, i);
		}
	}
	constructor(ctx: Rv32m_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterDIV) {
			listener.enterDIV(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitDIV) {
			listener.exitDIV(this);
		}
	}
}
export class DIVUContext extends Rv32m_extContext {
	public I_DIVU(): TerminalNode { return this.getToken(RISCVParser.I_DIVU, 0); }
	public XREG(): TerminalNode[];
	public XREG(i: number): TerminalNode;
	public XREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.XREG);
		} else {
			return this.getToken(RISCVParser.XREG, i);
		}
	}
	constructor(ctx: Rv32m_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterDIVU) {
			listener.enterDIVU(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitDIVU) {
			listener.exitDIVU(this);
		}
	}
}
export class REMContext extends Rv32m_extContext {
	public I_REM(): TerminalNode { return this.getToken(RISCVParser.I_REM, 0); }
	public XREG(): TerminalNode[];
	public XREG(i: number): TerminalNode;
	public XREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.XREG);
		} else {
			return this.getToken(RISCVParser.XREG, i);
		}
	}
	constructor(ctx: Rv32m_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterREM) {
			listener.enterREM(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitREM) {
			listener.exitREM(this);
		}
	}
}
export class REMUContext extends Rv32m_extContext {
	public I_REMU(): TerminalNode { return this.getToken(RISCVParser.I_REMU, 0); }
	public XREG(): TerminalNode[];
	public XREG(i: number): TerminalNode;
	public XREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.XREG);
		} else {
			return this.getToken(RISCVParser.XREG, i);
		}
	}
	constructor(ctx: Rv32m_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterREMU) {
			listener.enterREMU(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitREMU) {
			listener.exitREMU(this);
		}
	}
}


export class Rv32a_extContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RISCVParser.RULE_rv32a_ext; }
	public copyFrom(ctx: Rv32a_extContext): void {
		super.copyFrom(ctx);
	}
}
export class LRWContext extends Rv32a_extContext {
	public I_LRW(): TerminalNode { return this.getToken(RISCVParser.I_LRW, 0); }
	public XREG(): TerminalNode[];
	public XREG(i: number): TerminalNode;
	public XREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.XREG);
		} else {
			return this.getToken(RISCVParser.XREG, i);
		}
	}
	constructor(ctx: Rv32a_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterLRW) {
			listener.enterLRW(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitLRW) {
			listener.exitLRW(this);
		}
	}
}
export class SCWContext extends Rv32a_extContext {
	public I_SCW(): TerminalNode { return this.getToken(RISCVParser.I_SCW, 0); }
	public XREG(): TerminalNode[];
	public XREG(i: number): TerminalNode;
	public XREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.XREG);
		} else {
			return this.getToken(RISCVParser.XREG, i);
		}
	}
	constructor(ctx: Rv32a_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterSCW) {
			listener.enterSCW(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitSCW) {
			listener.exitSCW(this);
		}
	}
}
export class AMOSWAPWContext extends Rv32a_extContext {
	public I_AMOSWAPW(): TerminalNode { return this.getToken(RISCVParser.I_AMOSWAPW, 0); }
	public XREG(): TerminalNode[];
	public XREG(i: number): TerminalNode;
	public XREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.XREG);
		} else {
			return this.getToken(RISCVParser.XREG, i);
		}
	}
	constructor(ctx: Rv32a_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterAMOSWAPW) {
			listener.enterAMOSWAPW(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitAMOSWAPW) {
			listener.exitAMOSWAPW(this);
		}
	}
}
export class AMOADDWContext extends Rv32a_extContext {
	public I_AMOADDW(): TerminalNode { return this.getToken(RISCVParser.I_AMOADDW, 0); }
	public XREG(): TerminalNode[];
	public XREG(i: number): TerminalNode;
	public XREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.XREG);
		} else {
			return this.getToken(RISCVParser.XREG, i);
		}
	}
	constructor(ctx: Rv32a_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterAMOADDW) {
			listener.enterAMOADDW(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitAMOADDW) {
			listener.exitAMOADDW(this);
		}
	}
}
export class AMOXORWContext extends Rv32a_extContext {
	public I_AMOXORW(): TerminalNode { return this.getToken(RISCVParser.I_AMOXORW, 0); }
	public XREG(): TerminalNode[];
	public XREG(i: number): TerminalNode;
	public XREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.XREG);
		} else {
			return this.getToken(RISCVParser.XREG, i);
		}
	}
	constructor(ctx: Rv32a_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterAMOXORW) {
			listener.enterAMOXORW(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitAMOXORW) {
			listener.exitAMOXORW(this);
		}
	}
}
export class AMOANDWContext extends Rv32a_extContext {
	public I_AMOANDW(): TerminalNode { return this.getToken(RISCVParser.I_AMOANDW, 0); }
	public XREG(): TerminalNode[];
	public XREG(i: number): TerminalNode;
	public XREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.XREG);
		} else {
			return this.getToken(RISCVParser.XREG, i);
		}
	}
	constructor(ctx: Rv32a_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterAMOANDW) {
			listener.enterAMOANDW(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitAMOANDW) {
			listener.exitAMOANDW(this);
		}
	}
}
export class AMOORWContext extends Rv32a_extContext {
	public I_AMOORW(): TerminalNode { return this.getToken(RISCVParser.I_AMOORW, 0); }
	public XREG(): TerminalNode[];
	public XREG(i: number): TerminalNode;
	public XREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.XREG);
		} else {
			return this.getToken(RISCVParser.XREG, i);
		}
	}
	constructor(ctx: Rv32a_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterAMOORW) {
			listener.enterAMOORW(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitAMOORW) {
			listener.exitAMOORW(this);
		}
	}
}
export class AMOMINWContext extends Rv32a_extContext {
	public I_AMOMINW(): TerminalNode { return this.getToken(RISCVParser.I_AMOMINW, 0); }
	public XREG(): TerminalNode[];
	public XREG(i: number): TerminalNode;
	public XREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.XREG);
		} else {
			return this.getToken(RISCVParser.XREG, i);
		}
	}
	constructor(ctx: Rv32a_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterAMOMINW) {
			listener.enterAMOMINW(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitAMOMINW) {
			listener.exitAMOMINW(this);
		}
	}
}
export class AMOMAXWContext extends Rv32a_extContext {
	public I_AMOMAXW(): TerminalNode { return this.getToken(RISCVParser.I_AMOMAXW, 0); }
	public XREG(): TerminalNode[];
	public XREG(i: number): TerminalNode;
	public XREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.XREG);
		} else {
			return this.getToken(RISCVParser.XREG, i);
		}
	}
	constructor(ctx: Rv32a_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterAMOMAXW) {
			listener.enterAMOMAXW(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitAMOMAXW) {
			listener.exitAMOMAXW(this);
		}
	}
}
export class AMOMINUWContext extends Rv32a_extContext {
	public I_AMOMINUW(): TerminalNode { return this.getToken(RISCVParser.I_AMOMINUW, 0); }
	public XREG(): TerminalNode[];
	public XREG(i: number): TerminalNode;
	public XREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.XREG);
		} else {
			return this.getToken(RISCVParser.XREG, i);
		}
	}
	constructor(ctx: Rv32a_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterAMOMINUW) {
			listener.enterAMOMINUW(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitAMOMINUW) {
			listener.exitAMOMINUW(this);
		}
	}
}
export class AMOMAXUWContext extends Rv32a_extContext {
	public I_AMOMAXUW(): TerminalNode { return this.getToken(RISCVParser.I_AMOMAXUW, 0); }
	public XREG(): TerminalNode[];
	public XREG(i: number): TerminalNode;
	public XREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.XREG);
		} else {
			return this.getToken(RISCVParser.XREG, i);
		}
	}
	constructor(ctx: Rv32a_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterAMOMAXUW) {
			listener.enterAMOMAXUW(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitAMOMAXUW) {
			listener.exitAMOMAXUW(this);
		}
	}
}


export class Rv32f_extContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RISCVParser.RULE_rv32f_ext; }
	public copyFrom(ctx: Rv32f_extContext): void {
		super.copyFrom(ctx);
	}
}
export class FLWContext extends Rv32f_extContext {
	public I_FLW(): TerminalNode { return this.getToken(RISCVParser.I_FLW, 0); }
	public FREG(): TerminalNode { return this.getToken(RISCVParser.FREG, 0); }
	public XREG(): TerminalNode | undefined { return this.tryGetToken(RISCVParser.XREG, 0); }
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	constructor(ctx: Rv32f_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterFLW) {
			listener.enterFLW(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitFLW) {
			listener.exitFLW(this);
		}
	}
}
export class FSWContext extends Rv32f_extContext {
	public I_FSW(): TerminalNode { return this.getToken(RISCVParser.I_FSW, 0); }
	public XREG(): TerminalNode | undefined { return this.tryGetToken(RISCVParser.XREG, 0); }
	public FREG(): TerminalNode | undefined { return this.tryGetToken(RISCVParser.FREG, 0); }
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	constructor(ctx: Rv32f_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterFSW) {
			listener.enterFSW(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitFSW) {
			listener.exitFSW(this);
		}
	}
}
export class FMADDSContext extends Rv32f_extContext {
	public I_FMADDS(): TerminalNode { return this.getToken(RISCVParser.I_FMADDS, 0); }
	public FREG(): TerminalNode[];
	public FREG(i: number): TerminalNode;
	public FREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.FREG);
		} else {
			return this.getToken(RISCVParser.FREG, i);
		}
	}
	constructor(ctx: Rv32f_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterFMADDS) {
			listener.enterFMADDS(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitFMADDS) {
			listener.exitFMADDS(this);
		}
	}
}
export class FMSUBSContext extends Rv32f_extContext {
	public I_FMSUBS(): TerminalNode { return this.getToken(RISCVParser.I_FMSUBS, 0); }
	public FREG(): TerminalNode[];
	public FREG(i: number): TerminalNode;
	public FREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.FREG);
		} else {
			return this.getToken(RISCVParser.FREG, i);
		}
	}
	constructor(ctx: Rv32f_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterFMSUBS) {
			listener.enterFMSUBS(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitFMSUBS) {
			listener.exitFMSUBS(this);
		}
	}
}
export class FNMSUBSContext extends Rv32f_extContext {
	public I_FNMSUBS(): TerminalNode { return this.getToken(RISCVParser.I_FNMSUBS, 0); }
	public FREG(): TerminalNode[];
	public FREG(i: number): TerminalNode;
	public FREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.FREG);
		} else {
			return this.getToken(RISCVParser.FREG, i);
		}
	}
	constructor(ctx: Rv32f_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterFNMSUBS) {
			listener.enterFNMSUBS(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitFNMSUBS) {
			listener.exitFNMSUBS(this);
		}
	}
}
export class FNMADDSContext extends Rv32f_extContext {
	public I_FNMADDS(): TerminalNode { return this.getToken(RISCVParser.I_FNMADDS, 0); }
	public FREG(): TerminalNode[];
	public FREG(i: number): TerminalNode;
	public FREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.FREG);
		} else {
			return this.getToken(RISCVParser.FREG, i);
		}
	}
	constructor(ctx: Rv32f_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterFNMADDS) {
			listener.enterFNMADDS(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitFNMADDS) {
			listener.exitFNMADDS(this);
		}
	}
}
export class FADDSContext extends Rv32f_extContext {
	public I_FADDS(): TerminalNode { return this.getToken(RISCVParser.I_FADDS, 0); }
	public FREG(): TerminalNode[];
	public FREG(i: number): TerminalNode;
	public FREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.FREG);
		} else {
			return this.getToken(RISCVParser.FREG, i);
		}
	}
	constructor(ctx: Rv32f_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterFADDS) {
			listener.enterFADDS(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitFADDS) {
			listener.exitFADDS(this);
		}
	}
}
export class FSUBSContext extends Rv32f_extContext {
	public I_FSUBS(): TerminalNode { return this.getToken(RISCVParser.I_FSUBS, 0); }
	public FREG(): TerminalNode[];
	public FREG(i: number): TerminalNode;
	public FREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.FREG);
		} else {
			return this.getToken(RISCVParser.FREG, i);
		}
	}
	constructor(ctx: Rv32f_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterFSUBS) {
			listener.enterFSUBS(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitFSUBS) {
			listener.exitFSUBS(this);
		}
	}
}
export class FMULSContext extends Rv32f_extContext {
	public I_FMULS(): TerminalNode { return this.getToken(RISCVParser.I_FMULS, 0); }
	public FREG(): TerminalNode[];
	public FREG(i: number): TerminalNode;
	public FREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.FREG);
		} else {
			return this.getToken(RISCVParser.FREG, i);
		}
	}
	constructor(ctx: Rv32f_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterFMULS) {
			listener.enterFMULS(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitFMULS) {
			listener.exitFMULS(this);
		}
	}
}
export class FDIVSContext extends Rv32f_extContext {
	public I_FDIVS(): TerminalNode { return this.getToken(RISCVParser.I_FDIVS, 0); }
	public FREG(): TerminalNode[];
	public FREG(i: number): TerminalNode;
	public FREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.FREG);
		} else {
			return this.getToken(RISCVParser.FREG, i);
		}
	}
	constructor(ctx: Rv32f_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterFDIVS) {
			listener.enterFDIVS(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitFDIVS) {
			listener.exitFDIVS(this);
		}
	}
}
export class FSQRTSContext extends Rv32f_extContext {
	public I_FSQRTS(): TerminalNode { return this.getToken(RISCVParser.I_FSQRTS, 0); }
	public FREG(): TerminalNode[];
	public FREG(i: number): TerminalNode;
	public FREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.FREG);
		} else {
			return this.getToken(RISCVParser.FREG, i);
		}
	}
	constructor(ctx: Rv32f_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterFSQRTS) {
			listener.enterFSQRTS(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitFSQRTS) {
			listener.exitFSQRTS(this);
		}
	}
}
export class FSGNJSContext extends Rv32f_extContext {
	public I_FSGNJS(): TerminalNode { return this.getToken(RISCVParser.I_FSGNJS, 0); }
	public FREG(): TerminalNode[];
	public FREG(i: number): TerminalNode;
	public FREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.FREG);
		} else {
			return this.getToken(RISCVParser.FREG, i);
		}
	}
	constructor(ctx: Rv32f_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterFSGNJS) {
			listener.enterFSGNJS(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitFSGNJS) {
			listener.exitFSGNJS(this);
		}
	}
}
export class FSGNJNSContext extends Rv32f_extContext {
	public I_FSGNJNS(): TerminalNode { return this.getToken(RISCVParser.I_FSGNJNS, 0); }
	public FREG(): TerminalNode[];
	public FREG(i: number): TerminalNode;
	public FREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.FREG);
		} else {
			return this.getToken(RISCVParser.FREG, i);
		}
	}
	constructor(ctx: Rv32f_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterFSGNJNS) {
			listener.enterFSGNJNS(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitFSGNJNS) {
			listener.exitFSGNJNS(this);
		}
	}
}
export class FSGNJXSContext extends Rv32f_extContext {
	public I_FSGNJXS(): TerminalNode { return this.getToken(RISCVParser.I_FSGNJXS, 0); }
	public FREG(): TerminalNode[];
	public FREG(i: number): TerminalNode;
	public FREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.FREG);
		} else {
			return this.getToken(RISCVParser.FREG, i);
		}
	}
	constructor(ctx: Rv32f_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterFSGNJXS) {
			listener.enterFSGNJXS(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitFSGNJXS) {
			listener.exitFSGNJXS(this);
		}
	}
}
export class FMINSContext extends Rv32f_extContext {
	public I_FMINS(): TerminalNode { return this.getToken(RISCVParser.I_FMINS, 0); }
	public FREG(): TerminalNode[];
	public FREG(i: number): TerminalNode;
	public FREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.FREG);
		} else {
			return this.getToken(RISCVParser.FREG, i);
		}
	}
	constructor(ctx: Rv32f_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterFMINS) {
			listener.enterFMINS(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitFMINS) {
			listener.exitFMINS(this);
		}
	}
}
export class FMAXSContext extends Rv32f_extContext {
	public I_FMAXS(): TerminalNode { return this.getToken(RISCVParser.I_FMAXS, 0); }
	public FREG(): TerminalNode[];
	public FREG(i: number): TerminalNode;
	public FREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.FREG);
		} else {
			return this.getToken(RISCVParser.FREG, i);
		}
	}
	constructor(ctx: Rv32f_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterFMAXS) {
			listener.enterFMAXS(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitFMAXS) {
			listener.exitFMAXS(this);
		}
	}
}
export class FCVTWSContext extends Rv32f_extContext {
	public I_FCVTWS(): TerminalNode { return this.getToken(RISCVParser.I_FCVTWS, 0); }
	public XREG(): TerminalNode { return this.getToken(RISCVParser.XREG, 0); }
	public FREG(): TerminalNode { return this.getToken(RISCVParser.FREG, 0); }
	constructor(ctx: Rv32f_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterFCVTWS) {
			listener.enterFCVTWS(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitFCVTWS) {
			listener.exitFCVTWS(this);
		}
	}
}
export class FCVTWUSContext extends Rv32f_extContext {
	public I_FCVTWUS(): TerminalNode { return this.getToken(RISCVParser.I_FCVTWUS, 0); }
	public XREG(): TerminalNode { return this.getToken(RISCVParser.XREG, 0); }
	public FREG(): TerminalNode { return this.getToken(RISCVParser.FREG, 0); }
	constructor(ctx: Rv32f_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterFCVTWUS) {
			listener.enterFCVTWUS(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitFCVTWUS) {
			listener.exitFCVTWUS(this);
		}
	}
}
export class FMVXWContext extends Rv32f_extContext {
	public I_FMVXW(): TerminalNode { return this.getToken(RISCVParser.I_FMVXW, 0); }
	public XREG(): TerminalNode { return this.getToken(RISCVParser.XREG, 0); }
	public FREG(): TerminalNode { return this.getToken(RISCVParser.FREG, 0); }
	constructor(ctx: Rv32f_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterFMVXW) {
			listener.enterFMVXW(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitFMVXW) {
			listener.exitFMVXW(this);
		}
	}
}
export class FMVXSContext extends Rv32f_extContext {
	public I_FMVXS(): TerminalNode { return this.getToken(RISCVParser.I_FMVXS, 0); }
	public XREG(): TerminalNode { return this.getToken(RISCVParser.XREG, 0); }
	public FREG(): TerminalNode { return this.getToken(RISCVParser.FREG, 0); }
	constructor(ctx: Rv32f_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterFMVXS) {
			listener.enterFMVXS(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitFMVXS) {
			listener.exitFMVXS(this);
		}
	}
}
export class FEQSContext extends Rv32f_extContext {
	public I_FEQS(): TerminalNode { return this.getToken(RISCVParser.I_FEQS, 0); }
	public XREG(): TerminalNode { return this.getToken(RISCVParser.XREG, 0); }
	public FREG(): TerminalNode[];
	public FREG(i: number): TerminalNode;
	public FREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.FREG);
		} else {
			return this.getToken(RISCVParser.FREG, i);
		}
	}
	constructor(ctx: Rv32f_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterFEQS) {
			listener.enterFEQS(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitFEQS) {
			listener.exitFEQS(this);
		}
	}
}
export class FLTSContext extends Rv32f_extContext {
	public I_FLTS(): TerminalNode { return this.getToken(RISCVParser.I_FLTS, 0); }
	public XREG(): TerminalNode { return this.getToken(RISCVParser.XREG, 0); }
	public FREG(): TerminalNode[];
	public FREG(i: number): TerminalNode;
	public FREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.FREG);
		} else {
			return this.getToken(RISCVParser.FREG, i);
		}
	}
	constructor(ctx: Rv32f_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterFLTS) {
			listener.enterFLTS(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitFLTS) {
			listener.exitFLTS(this);
		}
	}
}
export class FLESContext extends Rv32f_extContext {
	public I_FLES(): TerminalNode { return this.getToken(RISCVParser.I_FLES, 0); }
	public XREG(): TerminalNode { return this.getToken(RISCVParser.XREG, 0); }
	public FREG(): TerminalNode[];
	public FREG(i: number): TerminalNode;
	public FREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.FREG);
		} else {
			return this.getToken(RISCVParser.FREG, i);
		}
	}
	constructor(ctx: Rv32f_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterFLES) {
			listener.enterFLES(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitFLES) {
			listener.exitFLES(this);
		}
	}
}
export class FCLASSSContext extends Rv32f_extContext {
	public I_FCLASSS(): TerminalNode { return this.getToken(RISCVParser.I_FCLASSS, 0); }
	public XREG(): TerminalNode { return this.getToken(RISCVParser.XREG, 0); }
	public FREG(): TerminalNode { return this.getToken(RISCVParser.FREG, 0); }
	constructor(ctx: Rv32f_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterFCLASSS) {
			listener.enterFCLASSS(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitFCLASSS) {
			listener.exitFCLASSS(this);
		}
	}
}
export class FCVTSWContext extends Rv32f_extContext {
	public I_FCVTSW(): TerminalNode { return this.getToken(RISCVParser.I_FCVTSW, 0); }
	public FREG(): TerminalNode { return this.getToken(RISCVParser.FREG, 0); }
	public XREG(): TerminalNode { return this.getToken(RISCVParser.XREG, 0); }
	constructor(ctx: Rv32f_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterFCVTSW) {
			listener.enterFCVTSW(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitFCVTSW) {
			listener.exitFCVTSW(this);
		}
	}
}
export class FCVTSWUContext extends Rv32f_extContext {
	public I_FCVTSWU(): TerminalNode { return this.getToken(RISCVParser.I_FCVTSWU, 0); }
	public FREG(): TerminalNode { return this.getToken(RISCVParser.FREG, 0); }
	public XREG(): TerminalNode { return this.getToken(RISCVParser.XREG, 0); }
	constructor(ctx: Rv32f_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterFCVTSWU) {
			listener.enterFCVTSWU(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitFCVTSWU) {
			listener.exitFCVTSWU(this);
		}
	}
}
export class FMVWXContext extends Rv32f_extContext {
	public I_FMVWX(): TerminalNode { return this.getToken(RISCVParser.I_FMVWX, 0); }
	public FREG(): TerminalNode { return this.getToken(RISCVParser.FREG, 0); }
	public XREG(): TerminalNode { return this.getToken(RISCVParser.XREG, 0); }
	constructor(ctx: Rv32f_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterFMVWX) {
			listener.enterFMVWX(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitFMVWX) {
			listener.exitFMVWX(this);
		}
	}
}
export class FMVSXContext extends Rv32f_extContext {
	public I_FMVSX(): TerminalNode { return this.getToken(RISCVParser.I_FMVSX, 0); }
	public FREG(): TerminalNode { return this.getToken(RISCVParser.FREG, 0); }
	public XREG(): TerminalNode { return this.getToken(RISCVParser.XREG, 0); }
	constructor(ctx: Rv32f_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterFMVSX) {
			listener.enterFMVSX(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitFMVSX) {
			listener.exitFMVSX(this);
		}
	}
}


export class Rv32d_extContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RISCVParser.RULE_rv32d_ext; }
	public copyFrom(ctx: Rv32d_extContext): void {
		super.copyFrom(ctx);
	}
}
export class FLDContext extends Rv32d_extContext {
	public I_FLD(): TerminalNode { return this.getToken(RISCVParser.I_FLD, 0); }
	public FREG(): TerminalNode { return this.getToken(RISCVParser.FREG, 0); }
	public XREG(): TerminalNode | undefined { return this.tryGetToken(RISCVParser.XREG, 0); }
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	constructor(ctx: Rv32d_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterFLD) {
			listener.enterFLD(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitFLD) {
			listener.exitFLD(this);
		}
	}
}
export class FSDContext extends Rv32d_extContext {
	public I_FSD(): TerminalNode { return this.getToken(RISCVParser.I_FSD, 0); }
	public XREG(): TerminalNode | undefined { return this.tryGetToken(RISCVParser.XREG, 0); }
	public FREG(): TerminalNode | undefined { return this.tryGetToken(RISCVParser.FREG, 0); }
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	constructor(ctx: Rv32d_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterFSD) {
			listener.enterFSD(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitFSD) {
			listener.exitFSD(this);
		}
	}
}
export class FMADDDContext extends Rv32d_extContext {
	public I_FMADDD(): TerminalNode { return this.getToken(RISCVParser.I_FMADDD, 0); }
	public FREG(): TerminalNode[];
	public FREG(i: number): TerminalNode;
	public FREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.FREG);
		} else {
			return this.getToken(RISCVParser.FREG, i);
		}
	}
	constructor(ctx: Rv32d_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterFMADDD) {
			listener.enterFMADDD(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitFMADDD) {
			listener.exitFMADDD(this);
		}
	}
}
export class FMSUBDContext extends Rv32d_extContext {
	public I_FMSUBD(): TerminalNode { return this.getToken(RISCVParser.I_FMSUBD, 0); }
	public FREG(): TerminalNode[];
	public FREG(i: number): TerminalNode;
	public FREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.FREG);
		} else {
			return this.getToken(RISCVParser.FREG, i);
		}
	}
	constructor(ctx: Rv32d_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterFMSUBD) {
			listener.enterFMSUBD(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitFMSUBD) {
			listener.exitFMSUBD(this);
		}
	}
}
export class FNMSUBDContext extends Rv32d_extContext {
	public I_FNMSUBD(): TerminalNode { return this.getToken(RISCVParser.I_FNMSUBD, 0); }
	public FREG(): TerminalNode[];
	public FREG(i: number): TerminalNode;
	public FREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.FREG);
		} else {
			return this.getToken(RISCVParser.FREG, i);
		}
	}
	constructor(ctx: Rv32d_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterFNMSUBD) {
			listener.enterFNMSUBD(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitFNMSUBD) {
			listener.exitFNMSUBD(this);
		}
	}
}
export class FNMADDDContext extends Rv32d_extContext {
	public I_FNMADDD(): TerminalNode { return this.getToken(RISCVParser.I_FNMADDD, 0); }
	public FREG(): TerminalNode[];
	public FREG(i: number): TerminalNode;
	public FREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.FREG);
		} else {
			return this.getToken(RISCVParser.FREG, i);
		}
	}
	constructor(ctx: Rv32d_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterFNMADDD) {
			listener.enterFNMADDD(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitFNMADDD) {
			listener.exitFNMADDD(this);
		}
	}
}
export class FADDDContext extends Rv32d_extContext {
	public I_FADDD(): TerminalNode { return this.getToken(RISCVParser.I_FADDD, 0); }
	public FREG(): TerminalNode[];
	public FREG(i: number): TerminalNode;
	public FREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.FREG);
		} else {
			return this.getToken(RISCVParser.FREG, i);
		}
	}
	constructor(ctx: Rv32d_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterFADDD) {
			listener.enterFADDD(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitFADDD) {
			listener.exitFADDD(this);
		}
	}
}
export class FSUBDContext extends Rv32d_extContext {
	public I_FSUBD(): TerminalNode { return this.getToken(RISCVParser.I_FSUBD, 0); }
	public FREG(): TerminalNode[];
	public FREG(i: number): TerminalNode;
	public FREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.FREG);
		} else {
			return this.getToken(RISCVParser.FREG, i);
		}
	}
	constructor(ctx: Rv32d_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterFSUBD) {
			listener.enterFSUBD(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitFSUBD) {
			listener.exitFSUBD(this);
		}
	}
}
export class FMULDContext extends Rv32d_extContext {
	public I_FMULD(): TerminalNode { return this.getToken(RISCVParser.I_FMULD, 0); }
	public FREG(): TerminalNode[];
	public FREG(i: number): TerminalNode;
	public FREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.FREG);
		} else {
			return this.getToken(RISCVParser.FREG, i);
		}
	}
	constructor(ctx: Rv32d_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterFMULD) {
			listener.enterFMULD(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitFMULD) {
			listener.exitFMULD(this);
		}
	}
}
export class FDIVDContext extends Rv32d_extContext {
	public I_FDIVD(): TerminalNode { return this.getToken(RISCVParser.I_FDIVD, 0); }
	public FREG(): TerminalNode[];
	public FREG(i: number): TerminalNode;
	public FREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.FREG);
		} else {
			return this.getToken(RISCVParser.FREG, i);
		}
	}
	constructor(ctx: Rv32d_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterFDIVD) {
			listener.enterFDIVD(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitFDIVD) {
			listener.exitFDIVD(this);
		}
	}
}
export class FSQRTDContext extends Rv32d_extContext {
	public I_FSQRTD(): TerminalNode { return this.getToken(RISCVParser.I_FSQRTD, 0); }
	public FREG(): TerminalNode[];
	public FREG(i: number): TerminalNode;
	public FREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.FREG);
		} else {
			return this.getToken(RISCVParser.FREG, i);
		}
	}
	constructor(ctx: Rv32d_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterFSQRTD) {
			listener.enterFSQRTD(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitFSQRTD) {
			listener.exitFSQRTD(this);
		}
	}
}
export class FSGNJDContext extends Rv32d_extContext {
	public I_FSGNJD(): TerminalNode { return this.getToken(RISCVParser.I_FSGNJD, 0); }
	public FREG(): TerminalNode[];
	public FREG(i: number): TerminalNode;
	public FREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.FREG);
		} else {
			return this.getToken(RISCVParser.FREG, i);
		}
	}
	constructor(ctx: Rv32d_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterFSGNJD) {
			listener.enterFSGNJD(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitFSGNJD) {
			listener.exitFSGNJD(this);
		}
	}
}
export class FSGNJNDContext extends Rv32d_extContext {
	public I_FSGNJND(): TerminalNode { return this.getToken(RISCVParser.I_FSGNJND, 0); }
	public FREG(): TerminalNode[];
	public FREG(i: number): TerminalNode;
	public FREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.FREG);
		} else {
			return this.getToken(RISCVParser.FREG, i);
		}
	}
	constructor(ctx: Rv32d_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterFSGNJND) {
			listener.enterFSGNJND(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitFSGNJND) {
			listener.exitFSGNJND(this);
		}
	}
}
export class FSGNJXDContext extends Rv32d_extContext {
	public I_FSGNJXD(): TerminalNode { return this.getToken(RISCVParser.I_FSGNJXD, 0); }
	public FREG(): TerminalNode[];
	public FREG(i: number): TerminalNode;
	public FREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.FREG);
		} else {
			return this.getToken(RISCVParser.FREG, i);
		}
	}
	constructor(ctx: Rv32d_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterFSGNJXD) {
			listener.enterFSGNJXD(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitFSGNJXD) {
			listener.exitFSGNJXD(this);
		}
	}
}
export class FMINDContext extends Rv32d_extContext {
	public I_FMIND(): TerminalNode { return this.getToken(RISCVParser.I_FMIND, 0); }
	public FREG(): TerminalNode[];
	public FREG(i: number): TerminalNode;
	public FREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.FREG);
		} else {
			return this.getToken(RISCVParser.FREG, i);
		}
	}
	constructor(ctx: Rv32d_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterFMIND) {
			listener.enterFMIND(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitFMIND) {
			listener.exitFMIND(this);
		}
	}
}
export class FMAXDContext extends Rv32d_extContext {
	public I_FMAXD(): TerminalNode { return this.getToken(RISCVParser.I_FMAXD, 0); }
	public FREG(): TerminalNode[];
	public FREG(i: number): TerminalNode;
	public FREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.FREG);
		} else {
			return this.getToken(RISCVParser.FREG, i);
		}
	}
	constructor(ctx: Rv32d_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterFMAXD) {
			listener.enterFMAXD(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitFMAXD) {
			listener.exitFMAXD(this);
		}
	}
}
export class FCVTSDContext extends Rv32d_extContext {
	public I_FCVTSD(): TerminalNode { return this.getToken(RISCVParser.I_FCVTSD, 0); }
	public FREG(): TerminalNode[];
	public FREG(i: number): TerminalNode;
	public FREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.FREG);
		} else {
			return this.getToken(RISCVParser.FREG, i);
		}
	}
	constructor(ctx: Rv32d_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterFCVTSD) {
			listener.enterFCVTSD(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitFCVTSD) {
			listener.exitFCVTSD(this);
		}
	}
}
export class FCVTDSContext extends Rv32d_extContext {
	public I_FCVTDS(): TerminalNode { return this.getToken(RISCVParser.I_FCVTDS, 0); }
	public FREG(): TerminalNode[];
	public FREG(i: number): TerminalNode;
	public FREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.FREG);
		} else {
			return this.getToken(RISCVParser.FREG, i);
		}
	}
	constructor(ctx: Rv32d_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterFCVTDS) {
			listener.enterFCVTDS(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitFCVTDS) {
			listener.exitFCVTDS(this);
		}
	}
}
export class FEQDContext extends Rv32d_extContext {
	public I_FEQD(): TerminalNode { return this.getToken(RISCVParser.I_FEQD, 0); }
	public XREG(): TerminalNode { return this.getToken(RISCVParser.XREG, 0); }
	public FREG(): TerminalNode[];
	public FREG(i: number): TerminalNode;
	public FREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.FREG);
		} else {
			return this.getToken(RISCVParser.FREG, i);
		}
	}
	constructor(ctx: Rv32d_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterFEQD) {
			listener.enterFEQD(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitFEQD) {
			listener.exitFEQD(this);
		}
	}
}
export class FLTDContext extends Rv32d_extContext {
	public I_FLTD(): TerminalNode { return this.getToken(RISCVParser.I_FLTD, 0); }
	public XREG(): TerminalNode { return this.getToken(RISCVParser.XREG, 0); }
	public FREG(): TerminalNode[];
	public FREG(i: number): TerminalNode;
	public FREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.FREG);
		} else {
			return this.getToken(RISCVParser.FREG, i);
		}
	}
	constructor(ctx: Rv32d_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterFLTD) {
			listener.enterFLTD(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitFLTD) {
			listener.exitFLTD(this);
		}
	}
}
export class FLEDContext extends Rv32d_extContext {
	public I_FLED(): TerminalNode { return this.getToken(RISCVParser.I_FLED, 0); }
	public XREG(): TerminalNode { return this.getToken(RISCVParser.XREG, 0); }
	public FREG(): TerminalNode[];
	public FREG(i: number): TerminalNode;
	public FREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.FREG);
		} else {
			return this.getToken(RISCVParser.FREG, i);
		}
	}
	constructor(ctx: Rv32d_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterFLED) {
			listener.enterFLED(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitFLED) {
			listener.exitFLED(this);
		}
	}
}
export class FCLASSDContext extends Rv32d_extContext {
	public I_FCLASSD(): TerminalNode { return this.getToken(RISCVParser.I_FCLASSD, 0); }
	public XREG(): TerminalNode { return this.getToken(RISCVParser.XREG, 0); }
	public FREG(): TerminalNode { return this.getToken(RISCVParser.FREG, 0); }
	constructor(ctx: Rv32d_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterFCLASSD) {
			listener.enterFCLASSD(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitFCLASSD) {
			listener.exitFCLASSD(this);
		}
	}
}
export class FCVTWDContext extends Rv32d_extContext {
	public I_FCVTWD(): TerminalNode { return this.getToken(RISCVParser.I_FCVTWD, 0); }
	public XREG(): TerminalNode { return this.getToken(RISCVParser.XREG, 0); }
	public FREG(): TerminalNode { return this.getToken(RISCVParser.FREG, 0); }
	constructor(ctx: Rv32d_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterFCVTWD) {
			listener.enterFCVTWD(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitFCVTWD) {
			listener.exitFCVTWD(this);
		}
	}
}
export class FCVTWUDContext extends Rv32d_extContext {
	public I_FCVTWUD(): TerminalNode { return this.getToken(RISCVParser.I_FCVTWUD, 0); }
	public XREG(): TerminalNode { return this.getToken(RISCVParser.XREG, 0); }
	public FREG(): TerminalNode { return this.getToken(RISCVParser.FREG, 0); }
	constructor(ctx: Rv32d_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterFCVTWUD) {
			listener.enterFCVTWUD(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitFCVTWUD) {
			listener.exitFCVTWUD(this);
		}
	}
}
export class FCVTDWContext extends Rv32d_extContext {
	public I_FCVTDW(): TerminalNode { return this.getToken(RISCVParser.I_FCVTDW, 0); }
	public FREG(): TerminalNode { return this.getToken(RISCVParser.FREG, 0); }
	public XREG(): TerminalNode { return this.getToken(RISCVParser.XREG, 0); }
	constructor(ctx: Rv32d_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterFCVTDW) {
			listener.enterFCVTDW(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitFCVTDW) {
			listener.exitFCVTDW(this);
		}
	}
}
export class FCVTDWUContext extends Rv32d_extContext {
	public I_FCVTDWU(): TerminalNode { return this.getToken(RISCVParser.I_FCVTDWU, 0); }
	public FREG(): TerminalNode { return this.getToken(RISCVParser.FREG, 0); }
	public XREG(): TerminalNode { return this.getToken(RISCVParser.XREG, 0); }
	constructor(ctx: Rv32d_extContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterFCVTDWU) {
			listener.enterFCVTDWU(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitFCVTDWU) {
			listener.exitFCVTDWU(this);
		}
	}
}


export class Rv32i_ext_pseudosContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RISCVParser.RULE_rv32i_ext_pseudos; }
	public copyFrom(ctx: Rv32i_ext_pseudosContext): void {
		super.copyFrom(ctx);
	}
}
export class LAPSEUDOContext extends Rv32i_ext_pseudosContext {
	public I_LA(): TerminalNode { return this.getToken(RISCVParser.I_LA, 0); }
	public XREG(): TerminalNode { return this.getToken(RISCVParser.XREG, 0); }
	public ID(): TerminalNode { return this.getToken(RISCVParser.ID, 0); }
	constructor(ctx: Rv32i_ext_pseudosContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterLAPSEUDO) {
			listener.enterLAPSEUDO(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitLAPSEUDO) {
			listener.exitLAPSEUDO(this);
		}
	}
}
export class LLAPSEUDOContext extends Rv32i_ext_pseudosContext {
	public I_LLA(): TerminalNode { return this.getToken(RISCVParser.I_LLA, 0); }
	public XREG(): TerminalNode { return this.getToken(RISCVParser.XREG, 0); }
	public ID(): TerminalNode { return this.getToken(RISCVParser.ID, 0); }
	constructor(ctx: Rv32i_ext_pseudosContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterLLAPSEUDO) {
			listener.enterLLAPSEUDO(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitLLAPSEUDO) {
			listener.exitLLAPSEUDO(this);
		}
	}
}
export class LBPSEUDOContext extends Rv32i_ext_pseudosContext {
	public I_LB(): TerminalNode { return this.getToken(RISCVParser.I_LB, 0); }
	public XREG(): TerminalNode { return this.getToken(RISCVParser.XREG, 0); }
	public ID(): TerminalNode { return this.getToken(RISCVParser.ID, 0); }
	constructor(ctx: Rv32i_ext_pseudosContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterLBPSEUDO) {
			listener.enterLBPSEUDO(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitLBPSEUDO) {
			listener.exitLBPSEUDO(this);
		}
	}
}
export class LHPSEUDOContext extends Rv32i_ext_pseudosContext {
	public I_LH(): TerminalNode { return this.getToken(RISCVParser.I_LH, 0); }
	public XREG(): TerminalNode { return this.getToken(RISCVParser.XREG, 0); }
	public ID(): TerminalNode { return this.getToken(RISCVParser.ID, 0); }
	constructor(ctx: Rv32i_ext_pseudosContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterLHPSEUDO) {
			listener.enterLHPSEUDO(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitLHPSEUDO) {
			listener.exitLHPSEUDO(this);
		}
	}
}
export class LWPSEUDOContext extends Rv32i_ext_pseudosContext {
	public I_LW(): TerminalNode { return this.getToken(RISCVParser.I_LW, 0); }
	public XREG(): TerminalNode { return this.getToken(RISCVParser.XREG, 0); }
	public ID(): TerminalNode { return this.getToken(RISCVParser.ID, 0); }
	constructor(ctx: Rv32i_ext_pseudosContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterLWPSEUDO) {
			listener.enterLWPSEUDO(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitLWPSEUDO) {
			listener.exitLWPSEUDO(this);
		}
	}
}
export class SBPSEUDOContext extends Rv32i_ext_pseudosContext {
	public I_SB(): TerminalNode { return this.getToken(RISCVParser.I_SB, 0); }
	public XREG(): TerminalNode[];
	public XREG(i: number): TerminalNode;
	public XREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.XREG);
		} else {
			return this.getToken(RISCVParser.XREG, i);
		}
	}
	public ID(): TerminalNode { return this.getToken(RISCVParser.ID, 0); }
	constructor(ctx: Rv32i_ext_pseudosContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterSBPSEUDO) {
			listener.enterSBPSEUDO(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitSBPSEUDO) {
			listener.exitSBPSEUDO(this);
		}
	}
}
export class SHPSEUDOContext extends Rv32i_ext_pseudosContext {
	public I_SH(): TerminalNode { return this.getToken(RISCVParser.I_SH, 0); }
	public XREG(): TerminalNode[];
	public XREG(i: number): TerminalNode;
	public XREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.XREG);
		} else {
			return this.getToken(RISCVParser.XREG, i);
		}
	}
	public ID(): TerminalNode { return this.getToken(RISCVParser.ID, 0); }
	constructor(ctx: Rv32i_ext_pseudosContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterSHPSEUDO) {
			listener.enterSHPSEUDO(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitSHPSEUDO) {
			listener.exitSHPSEUDO(this);
		}
	}
}
export class SWPSEUDOContext extends Rv32i_ext_pseudosContext {
	public I_SW(): TerminalNode { return this.getToken(RISCVParser.I_SW, 0); }
	public XREG(): TerminalNode[];
	public XREG(i: number): TerminalNode;
	public XREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.XREG);
		} else {
			return this.getToken(RISCVParser.XREG, i);
		}
	}
	public ID(): TerminalNode { return this.getToken(RISCVParser.ID, 0); }
	constructor(ctx: Rv32i_ext_pseudosContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterSWPSEUDO) {
			listener.enterSWPSEUDO(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitSWPSEUDO) {
			listener.exitSWPSEUDO(this);
		}
	}
}
export class NOPPSEUDOContext extends Rv32i_ext_pseudosContext {
	public I_NOP(): TerminalNode { return this.getToken(RISCVParser.I_NOP, 0); }
	constructor(ctx: Rv32i_ext_pseudosContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterNOPPSEUDO) {
			listener.enterNOPPSEUDO(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitNOPPSEUDO) {
			listener.exitNOPPSEUDO(this);
		}
	}
}
export class LIPSEUDOContext extends Rv32i_ext_pseudosContext {
	public I_LI(): TerminalNode { return this.getToken(RISCVParser.I_LI, 0); }
	public XREG(): TerminalNode { return this.getToken(RISCVParser.XREG, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: Rv32i_ext_pseudosContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterLIPSEUDO) {
			listener.enterLIPSEUDO(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitLIPSEUDO) {
			listener.exitLIPSEUDO(this);
		}
	}
}
export class MVPSEUDOContext extends Rv32i_ext_pseudosContext {
	public I_MV(): TerminalNode { return this.getToken(RISCVParser.I_MV, 0); }
	public XREG(): TerminalNode[];
	public XREG(i: number): TerminalNode;
	public XREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.XREG);
		} else {
			return this.getToken(RISCVParser.XREG, i);
		}
	}
	constructor(ctx: Rv32i_ext_pseudosContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterMVPSEUDO) {
			listener.enterMVPSEUDO(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitMVPSEUDO) {
			listener.exitMVPSEUDO(this);
		}
	}
}
export class NOTPSEUDOContext extends Rv32i_ext_pseudosContext {
	public I_NOT(): TerminalNode { return this.getToken(RISCVParser.I_NOT, 0); }
	public XREG(): TerminalNode[];
	public XREG(i: number): TerminalNode;
	public XREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.XREG);
		} else {
			return this.getToken(RISCVParser.XREG, i);
		}
	}
	constructor(ctx: Rv32i_ext_pseudosContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterNOTPSEUDO) {
			listener.enterNOTPSEUDO(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitNOTPSEUDO) {
			listener.exitNOTPSEUDO(this);
		}
	}
}
export class NEGPSEUDOContext extends Rv32i_ext_pseudosContext {
	public I_NEG(): TerminalNode { return this.getToken(RISCVParser.I_NEG, 0); }
	public XREG(): TerminalNode[];
	public XREG(i: number): TerminalNode;
	public XREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.XREG);
		} else {
			return this.getToken(RISCVParser.XREG, i);
		}
	}
	constructor(ctx: Rv32i_ext_pseudosContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterNEGPSEUDO) {
			listener.enterNEGPSEUDO(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitNEGPSEUDO) {
			listener.exitNEGPSEUDO(this);
		}
	}
}
export class SEQZPSEUDOContext extends Rv32i_ext_pseudosContext {
	public I_SEQZ(): TerminalNode { return this.getToken(RISCVParser.I_SEQZ, 0); }
	public XREG(): TerminalNode[];
	public XREG(i: number): TerminalNode;
	public XREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.XREG);
		} else {
			return this.getToken(RISCVParser.XREG, i);
		}
	}
	constructor(ctx: Rv32i_ext_pseudosContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterSEQZPSEUDO) {
			listener.enterSEQZPSEUDO(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitSEQZPSEUDO) {
			listener.exitSEQZPSEUDO(this);
		}
	}
}
export class SNEZPSEUDOContext extends Rv32i_ext_pseudosContext {
	public I_SNEZ(): TerminalNode { return this.getToken(RISCVParser.I_SNEZ, 0); }
	public XREG(): TerminalNode[];
	public XREG(i: number): TerminalNode;
	public XREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.XREG);
		} else {
			return this.getToken(RISCVParser.XREG, i);
		}
	}
	constructor(ctx: Rv32i_ext_pseudosContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterSNEZPSEUDO) {
			listener.enterSNEZPSEUDO(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitSNEZPSEUDO) {
			listener.exitSNEZPSEUDO(this);
		}
	}
}
export class SLTZPSEUDOContext extends Rv32i_ext_pseudosContext {
	public I_SLTZ(): TerminalNode { return this.getToken(RISCVParser.I_SLTZ, 0); }
	public XREG(): TerminalNode[];
	public XREG(i: number): TerminalNode;
	public XREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.XREG);
		} else {
			return this.getToken(RISCVParser.XREG, i);
		}
	}
	constructor(ctx: Rv32i_ext_pseudosContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterSLTZPSEUDO) {
			listener.enterSLTZPSEUDO(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitSLTZPSEUDO) {
			listener.exitSLTZPSEUDO(this);
		}
	}
}
export class SGTZPSEUDOContext extends Rv32i_ext_pseudosContext {
	public I_SGTZ(): TerminalNode { return this.getToken(RISCVParser.I_SGTZ, 0); }
	public XREG(): TerminalNode[];
	public XREG(i: number): TerminalNode;
	public XREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.XREG);
		} else {
			return this.getToken(RISCVParser.XREG, i);
		}
	}
	constructor(ctx: Rv32i_ext_pseudosContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterSGTZPSEUDO) {
			listener.enterSGTZPSEUDO(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitSGTZPSEUDO) {
			listener.exitSGTZPSEUDO(this);
		}
	}
}
export class BEQZPSEUDOContext extends Rv32i_ext_pseudosContext {
	public I_BEQZ(): TerminalNode { return this.getToken(RISCVParser.I_BEQZ, 0); }
	public XREG(): TerminalNode { return this.getToken(RISCVParser.XREG, 0); }
	public ID(): TerminalNode { return this.getToken(RISCVParser.ID, 0); }
	constructor(ctx: Rv32i_ext_pseudosContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterBEQZPSEUDO) {
			listener.enterBEQZPSEUDO(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitBEQZPSEUDO) {
			listener.exitBEQZPSEUDO(this);
		}
	}
}
export class BNEZPSEUDOContext extends Rv32i_ext_pseudosContext {
	public I_BNEZ(): TerminalNode { return this.getToken(RISCVParser.I_BNEZ, 0); }
	public XREG(): TerminalNode { return this.getToken(RISCVParser.XREG, 0); }
	public ID(): TerminalNode { return this.getToken(RISCVParser.ID, 0); }
	constructor(ctx: Rv32i_ext_pseudosContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterBNEZPSEUDO) {
			listener.enterBNEZPSEUDO(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitBNEZPSEUDO) {
			listener.exitBNEZPSEUDO(this);
		}
	}
}
export class BLEZPSEUDOContext extends Rv32i_ext_pseudosContext {
	public I_BLEZ(): TerminalNode { return this.getToken(RISCVParser.I_BLEZ, 0); }
	public XREG(): TerminalNode { return this.getToken(RISCVParser.XREG, 0); }
	public ID(): TerminalNode { return this.getToken(RISCVParser.ID, 0); }
	constructor(ctx: Rv32i_ext_pseudosContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterBLEZPSEUDO) {
			listener.enterBLEZPSEUDO(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitBLEZPSEUDO) {
			listener.exitBLEZPSEUDO(this);
		}
	}
}
export class BGEZPSEUDOContext extends Rv32i_ext_pseudosContext {
	public I_BGEZ(): TerminalNode { return this.getToken(RISCVParser.I_BGEZ, 0); }
	public XREG(): TerminalNode { return this.getToken(RISCVParser.XREG, 0); }
	public ID(): TerminalNode { return this.getToken(RISCVParser.ID, 0); }
	constructor(ctx: Rv32i_ext_pseudosContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterBGEZPSEUDO) {
			listener.enterBGEZPSEUDO(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitBGEZPSEUDO) {
			listener.exitBGEZPSEUDO(this);
		}
	}
}
export class BLTZPSEUDOContext extends Rv32i_ext_pseudosContext {
	public I_BLTZ(): TerminalNode { return this.getToken(RISCVParser.I_BLTZ, 0); }
	public XREG(): TerminalNode { return this.getToken(RISCVParser.XREG, 0); }
	public ID(): TerminalNode { return this.getToken(RISCVParser.ID, 0); }
	constructor(ctx: Rv32i_ext_pseudosContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterBLTZPSEUDO) {
			listener.enterBLTZPSEUDO(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitBLTZPSEUDO) {
			listener.exitBLTZPSEUDO(this);
		}
	}
}
export class BGTZPSEUDOContext extends Rv32i_ext_pseudosContext {
	public I_BGTZ(): TerminalNode { return this.getToken(RISCVParser.I_BGTZ, 0); }
	public XREG(): TerminalNode { return this.getToken(RISCVParser.XREG, 0); }
	public ID(): TerminalNode { return this.getToken(RISCVParser.ID, 0); }
	constructor(ctx: Rv32i_ext_pseudosContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterBGTZPSEUDO) {
			listener.enterBGTZPSEUDO(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitBGTZPSEUDO) {
			listener.exitBGTZPSEUDO(this);
		}
	}
}
export class BGTPSEUDOContext extends Rv32i_ext_pseudosContext {
	public I_BGT(): TerminalNode { return this.getToken(RISCVParser.I_BGT, 0); }
	public XREG(): TerminalNode[];
	public XREG(i: number): TerminalNode;
	public XREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.XREG);
		} else {
			return this.getToken(RISCVParser.XREG, i);
		}
	}
	public ID(): TerminalNode { return this.getToken(RISCVParser.ID, 0); }
	constructor(ctx: Rv32i_ext_pseudosContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterBGTPSEUDO) {
			listener.enterBGTPSEUDO(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitBGTPSEUDO) {
			listener.exitBGTPSEUDO(this);
		}
	}
}
export class BLEPSEUDOContext extends Rv32i_ext_pseudosContext {
	public I_BLE(): TerminalNode { return this.getToken(RISCVParser.I_BLE, 0); }
	public XREG(): TerminalNode[];
	public XREG(i: number): TerminalNode;
	public XREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.XREG);
		} else {
			return this.getToken(RISCVParser.XREG, i);
		}
	}
	public ID(): TerminalNode { return this.getToken(RISCVParser.ID, 0); }
	constructor(ctx: Rv32i_ext_pseudosContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterBLEPSEUDO) {
			listener.enterBLEPSEUDO(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitBLEPSEUDO) {
			listener.exitBLEPSEUDO(this);
		}
	}
}
export class BGTUPSEUDOContext extends Rv32i_ext_pseudosContext {
	public I_BGTU(): TerminalNode { return this.getToken(RISCVParser.I_BGTU, 0); }
	public XREG(): TerminalNode[];
	public XREG(i: number): TerminalNode;
	public XREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.XREG);
		} else {
			return this.getToken(RISCVParser.XREG, i);
		}
	}
	public ID(): TerminalNode { return this.getToken(RISCVParser.ID, 0); }
	constructor(ctx: Rv32i_ext_pseudosContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterBGTUPSEUDO) {
			listener.enterBGTUPSEUDO(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitBGTUPSEUDO) {
			listener.exitBGTUPSEUDO(this);
		}
	}
}
export class BLEUPSEUDOContext extends Rv32i_ext_pseudosContext {
	public I_BLEU(): TerminalNode { return this.getToken(RISCVParser.I_BLEU, 0); }
	public XREG(): TerminalNode[];
	public XREG(i: number): TerminalNode;
	public XREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.XREG);
		} else {
			return this.getToken(RISCVParser.XREG, i);
		}
	}
	public ID(): TerminalNode { return this.getToken(RISCVParser.ID, 0); }
	constructor(ctx: Rv32i_ext_pseudosContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterBLEUPSEUDO) {
			listener.enterBLEUPSEUDO(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitBLEUPSEUDO) {
			listener.exitBLEUPSEUDO(this);
		}
	}
}
export class JPSEUDOContext extends Rv32i_ext_pseudosContext {
	public I_J(): TerminalNode { return this.getToken(RISCVParser.I_J, 0); }
	public ID(): TerminalNode { return this.getToken(RISCVParser.ID, 0); }
	constructor(ctx: Rv32i_ext_pseudosContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterJPSEUDO) {
			listener.enterJPSEUDO(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitJPSEUDO) {
			listener.exitJPSEUDO(this);
		}
	}
}
export class JALPSEUDOContext extends Rv32i_ext_pseudosContext {
	public I_JAL(): TerminalNode { return this.getToken(RISCVParser.I_JAL, 0); }
	public ID(): TerminalNode { return this.getToken(RISCVParser.ID, 0); }
	constructor(ctx: Rv32i_ext_pseudosContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterJALPSEUDO) {
			listener.enterJALPSEUDO(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitJALPSEUDO) {
			listener.exitJALPSEUDO(this);
		}
	}
}
export class JRPSEUDOContext extends Rv32i_ext_pseudosContext {
	public I_JR(): TerminalNode { return this.getToken(RISCVParser.I_JR, 0); }
	public XREG(): TerminalNode { return this.getToken(RISCVParser.XREG, 0); }
	constructor(ctx: Rv32i_ext_pseudosContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterJRPSEUDO) {
			listener.enterJRPSEUDO(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitJRPSEUDO) {
			listener.exitJRPSEUDO(this);
		}
	}
}
export class JALRPSEUDOContext extends Rv32i_ext_pseudosContext {
	public I_JALR(): TerminalNode { return this.getToken(RISCVParser.I_JALR, 0); }
	public XREG(): TerminalNode { return this.getToken(RISCVParser.XREG, 0); }
	constructor(ctx: Rv32i_ext_pseudosContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterJALRPSEUDO) {
			listener.enterJALRPSEUDO(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitJALRPSEUDO) {
			listener.exitJALRPSEUDO(this);
		}
	}
}
export class RETPSEUDOContext extends Rv32i_ext_pseudosContext {
	public I_RET(): TerminalNode { return this.getToken(RISCVParser.I_RET, 0); }
	constructor(ctx: Rv32i_ext_pseudosContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterRETPSEUDO) {
			listener.enterRETPSEUDO(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitRETPSEUDO) {
			listener.exitRETPSEUDO(this);
		}
	}
}
export class CALLPSEUDOContext extends Rv32i_ext_pseudosContext {
	public I_CALL(): TerminalNode { return this.getToken(RISCVParser.I_CALL, 0); }
	public ID(): TerminalNode { return this.getToken(RISCVParser.ID, 0); }
	constructor(ctx: Rv32i_ext_pseudosContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterCALLPSEUDO) {
			listener.enterCALLPSEUDO(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitCALLPSEUDO) {
			listener.exitCALLPSEUDO(this);
		}
	}
}
export class TAILPSEUDOContext extends Rv32i_ext_pseudosContext {
	public I_TAIL(): TerminalNode { return this.getToken(RISCVParser.I_TAIL, 0); }
	public ID(): TerminalNode { return this.getToken(RISCVParser.ID, 0); }
	constructor(ctx: Rv32i_ext_pseudosContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterTAILPSEUDO) {
			listener.enterTAILPSEUDO(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitTAILPSEUDO) {
			listener.exitTAILPSEUDO(this);
		}
	}
}


export class Rv32zicsr_ext_pseudosContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RISCVParser.RULE_rv32zicsr_ext_pseudos; }
	public copyFrom(ctx: Rv32zicsr_ext_pseudosContext): void {
		super.copyFrom(ctx);
	}
}
export class RDINSTRETPSEUDOContext extends Rv32zicsr_ext_pseudosContext {
	public I_RDINSTRET(): TerminalNode { return this.getToken(RISCVParser.I_RDINSTRET, 0); }
	public XREG(): TerminalNode { return this.getToken(RISCVParser.XREG, 0); }
	constructor(ctx: Rv32zicsr_ext_pseudosContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterRDINSTRETPSEUDO) {
			listener.enterRDINSTRETPSEUDO(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitRDINSTRETPSEUDO) {
			listener.exitRDINSTRETPSEUDO(this);
		}
	}
}
export class RDCYCLEPSEUDOContext extends Rv32zicsr_ext_pseudosContext {
	public I_RDCYCLE(): TerminalNode { return this.getToken(RISCVParser.I_RDCYCLE, 0); }
	public XREG(): TerminalNode { return this.getToken(RISCVParser.XREG, 0); }
	constructor(ctx: Rv32zicsr_ext_pseudosContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterRDCYCLEPSEUDO) {
			listener.enterRDCYCLEPSEUDO(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitRDCYCLEPSEUDO) {
			listener.exitRDCYCLEPSEUDO(this);
		}
	}
}
export class RDTIMEPSEUDOContext extends Rv32zicsr_ext_pseudosContext {
	public I_RDTIME(): TerminalNode { return this.getToken(RISCVParser.I_RDTIME, 0); }
	public XREG(): TerminalNode { return this.getToken(RISCVParser.XREG, 0); }
	constructor(ctx: Rv32zicsr_ext_pseudosContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterRDTIMEPSEUDO) {
			listener.enterRDTIMEPSEUDO(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitRDTIMEPSEUDO) {
			listener.exitRDTIMEPSEUDO(this);
		}
	}
}
export class CSRRPSEUDOContext extends Rv32zicsr_ext_pseudosContext {
	public I_CSRR(): TerminalNode { return this.getToken(RISCVParser.I_CSRR, 0); }
	public XREG(): TerminalNode { return this.getToken(RISCVParser.XREG, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: Rv32zicsr_ext_pseudosContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterCSRRPSEUDO) {
			listener.enterCSRRPSEUDO(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitCSRRPSEUDO) {
			listener.exitCSRRPSEUDO(this);
		}
	}
}
export class CSRWPSEUDOContext extends Rv32zicsr_ext_pseudosContext {
	public I_CSRW(): TerminalNode { return this.getToken(RISCVParser.I_CSRW, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public XREG(): TerminalNode { return this.getToken(RISCVParser.XREG, 0); }
	constructor(ctx: Rv32zicsr_ext_pseudosContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterCSRWPSEUDO) {
			listener.enterCSRWPSEUDO(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitCSRWPSEUDO) {
			listener.exitCSRWPSEUDO(this);
		}
	}
}
export class CSRSPSEUDOContext extends Rv32zicsr_ext_pseudosContext {
	public I_CSRS(): TerminalNode { return this.getToken(RISCVParser.I_CSRS, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public XREG(): TerminalNode { return this.getToken(RISCVParser.XREG, 0); }
	constructor(ctx: Rv32zicsr_ext_pseudosContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterCSRSPSEUDO) {
			listener.enterCSRSPSEUDO(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitCSRSPSEUDO) {
			listener.exitCSRSPSEUDO(this);
		}
	}
}
export class CSRCPSEUDOContext extends Rv32zicsr_ext_pseudosContext {
	public I_CSRC(): TerminalNode { return this.getToken(RISCVParser.I_CSRC, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public XREG(): TerminalNode { return this.getToken(RISCVParser.XREG, 0); }
	constructor(ctx: Rv32zicsr_ext_pseudosContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterCSRCPSEUDO) {
			listener.enterCSRCPSEUDO(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitCSRCPSEUDO) {
			listener.exitCSRCPSEUDO(this);
		}
	}
}
export class CSRWIPSEUDOContext extends Rv32zicsr_ext_pseudosContext {
	public I_CSRWI(): TerminalNode { return this.getToken(RISCVParser.I_CSRWI, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public INT(): TerminalNode { return this.getToken(RISCVParser.INT, 0); }
	constructor(ctx: Rv32zicsr_ext_pseudosContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterCSRWIPSEUDO) {
			listener.enterCSRWIPSEUDO(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitCSRWIPSEUDO) {
			listener.exitCSRWIPSEUDO(this);
		}
	}
}
export class CSRSIPSEUDOContext extends Rv32zicsr_ext_pseudosContext {
	public I_CSRSI(): TerminalNode { return this.getToken(RISCVParser.I_CSRSI, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public INT(): TerminalNode { return this.getToken(RISCVParser.INT, 0); }
	constructor(ctx: Rv32zicsr_ext_pseudosContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterCSRSIPSEUDO) {
			listener.enterCSRSIPSEUDO(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitCSRSIPSEUDO) {
			listener.exitCSRSIPSEUDO(this);
		}
	}
}
export class CSRCIPSEUDOContext extends Rv32zicsr_ext_pseudosContext {
	public I_CSRCI(): TerminalNode { return this.getToken(RISCVParser.I_CSRCI, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public INT(): TerminalNode { return this.getToken(RISCVParser.INT, 0); }
	constructor(ctx: Rv32zicsr_ext_pseudosContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterCSRCIPSEUDO) {
			listener.enterCSRCIPSEUDO(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitCSRCIPSEUDO) {
			listener.exitCSRCIPSEUDO(this);
		}
	}
}
export class FRCSRPSEUDOContext extends Rv32zicsr_ext_pseudosContext {
	public I_FRCSR(): TerminalNode { return this.getToken(RISCVParser.I_FRCSR, 0); }
	public XREG(): TerminalNode { return this.getToken(RISCVParser.XREG, 0); }
	constructor(ctx: Rv32zicsr_ext_pseudosContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterFRCSRPSEUDO) {
			listener.enterFRCSRPSEUDO(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitFRCSRPSEUDO) {
			listener.exitFRCSRPSEUDO(this);
		}
	}
}
export class FSCSRPSEUDOContext extends Rv32zicsr_ext_pseudosContext {
	public I_FSCSR(): TerminalNode { return this.getToken(RISCVParser.I_FSCSR, 0); }
	public XREG(): TerminalNode { return this.getToken(RISCVParser.XREG, 0); }
	constructor(ctx: Rv32zicsr_ext_pseudosContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterFSCSRPSEUDO) {
			listener.enterFSCSRPSEUDO(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitFSCSRPSEUDO) {
			listener.exitFSCSRPSEUDO(this);
		}
	}
}
export class FSCSR2PSEUDOContext extends Rv32zicsr_ext_pseudosContext {
	public I_FSCSR(): TerminalNode { return this.getToken(RISCVParser.I_FSCSR, 0); }
	public XREG(): TerminalNode[];
	public XREG(i: number): TerminalNode;
	public XREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.XREG);
		} else {
			return this.getToken(RISCVParser.XREG, i);
		}
	}
	constructor(ctx: Rv32zicsr_ext_pseudosContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterFSCSR2PSEUDO) {
			listener.enterFSCSR2PSEUDO(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitFSCSR2PSEUDO) {
			listener.exitFSCSR2PSEUDO(this);
		}
	}
}
export class FRRMPSEUDOContext extends Rv32zicsr_ext_pseudosContext {
	public I_FRRM(): TerminalNode { return this.getToken(RISCVParser.I_FRRM, 0); }
	public XREG(): TerminalNode { return this.getToken(RISCVParser.XREG, 0); }
	constructor(ctx: Rv32zicsr_ext_pseudosContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterFRRMPSEUDO) {
			listener.enterFRRMPSEUDO(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitFRRMPSEUDO) {
			listener.exitFRRMPSEUDO(this);
		}
	}
}
export class FSRMPSEUDOContext extends Rv32zicsr_ext_pseudosContext {
	public I_FSRM(): TerminalNode { return this.getToken(RISCVParser.I_FSRM, 0); }
	public XREG(): TerminalNode { return this.getToken(RISCVParser.XREG, 0); }
	constructor(ctx: Rv32zicsr_ext_pseudosContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterFSRMPSEUDO) {
			listener.enterFSRMPSEUDO(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitFSRMPSEUDO) {
			listener.exitFSRMPSEUDO(this);
		}
	}
}
export class FSRM2PSEUDOContext extends Rv32zicsr_ext_pseudosContext {
	public I_FSRM(): TerminalNode { return this.getToken(RISCVParser.I_FSRM, 0); }
	public XREG(): TerminalNode[];
	public XREG(i: number): TerminalNode;
	public XREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.XREG);
		} else {
			return this.getToken(RISCVParser.XREG, i);
		}
	}
	constructor(ctx: Rv32zicsr_ext_pseudosContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterFSRM2PSEUDO) {
			listener.enterFSRM2PSEUDO(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitFSRM2PSEUDO) {
			listener.exitFSRM2PSEUDO(this);
		}
	}
}
export class FRFLAGSPSEUDOContext extends Rv32zicsr_ext_pseudosContext {
	public I_FRFLAGS(): TerminalNode { return this.getToken(RISCVParser.I_FRFLAGS, 0); }
	public XREG(): TerminalNode { return this.getToken(RISCVParser.XREG, 0); }
	constructor(ctx: Rv32zicsr_ext_pseudosContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterFRFLAGSPSEUDO) {
			listener.enterFRFLAGSPSEUDO(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitFRFLAGSPSEUDO) {
			listener.exitFRFLAGSPSEUDO(this);
		}
	}
}
export class FSFLAGSPSEUDOContext extends Rv32zicsr_ext_pseudosContext {
	public I_FSFLAGS(): TerminalNode { return this.getToken(RISCVParser.I_FSFLAGS, 0); }
	public XREG(): TerminalNode { return this.getToken(RISCVParser.XREG, 0); }
	constructor(ctx: Rv32zicsr_ext_pseudosContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterFSFLAGSPSEUDO) {
			listener.enterFSFLAGSPSEUDO(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitFSFLAGSPSEUDO) {
			listener.exitFSFLAGSPSEUDO(this);
		}
	}
}
export class FSFLAGS2PSEUDOContext extends Rv32zicsr_ext_pseudosContext {
	public I_FSFLAGS(): TerminalNode { return this.getToken(RISCVParser.I_FSFLAGS, 0); }
	public XREG(): TerminalNode[];
	public XREG(i: number): TerminalNode;
	public XREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.XREG);
		} else {
			return this.getToken(RISCVParser.XREG, i);
		}
	}
	constructor(ctx: Rv32zicsr_ext_pseudosContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterFSFLAGS2PSEUDO) {
			listener.enterFSFLAGS2PSEUDO(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitFSFLAGS2PSEUDO) {
			listener.exitFSFLAGS2PSEUDO(this);
		}
	}
}


export class Rv32f_ext_pseudosContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RISCVParser.RULE_rv32f_ext_pseudos; }
	public copyFrom(ctx: Rv32f_ext_pseudosContext): void {
		super.copyFrom(ctx);
	}
}
export class FLWPSEUDOContext extends Rv32f_ext_pseudosContext {
	public I_FLW(): TerminalNode { return this.getToken(RISCVParser.I_FLW, 0); }
	public FREG(): TerminalNode { return this.getToken(RISCVParser.FREG, 0); }
	public ID(): TerminalNode { return this.getToken(RISCVParser.ID, 0); }
	public XREG(): TerminalNode { return this.getToken(RISCVParser.XREG, 0); }
	constructor(ctx: Rv32f_ext_pseudosContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterFLWPSEUDO) {
			listener.enterFLWPSEUDO(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitFLWPSEUDO) {
			listener.exitFLWPSEUDO(this);
		}
	}
}
export class FSWPSEUDOContext extends Rv32f_ext_pseudosContext {
	public I_FSW(): TerminalNode { return this.getToken(RISCVParser.I_FSW, 0); }
	public FREG(): TerminalNode { return this.getToken(RISCVParser.FREG, 0); }
	public ID(): TerminalNode { return this.getToken(RISCVParser.ID, 0); }
	public XREG(): TerminalNode { return this.getToken(RISCVParser.XREG, 0); }
	constructor(ctx: Rv32f_ext_pseudosContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterFSWPSEUDO) {
			listener.enterFSWPSEUDO(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitFSWPSEUDO) {
			listener.exitFSWPSEUDO(this);
		}
	}
}
export class FMVSPSEUDOContext extends Rv32f_ext_pseudosContext {
	public I_FMVS(): TerminalNode { return this.getToken(RISCVParser.I_FMVS, 0); }
	public FREG(): TerminalNode[];
	public FREG(i: number): TerminalNode;
	public FREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.FREG);
		} else {
			return this.getToken(RISCVParser.FREG, i);
		}
	}
	constructor(ctx: Rv32f_ext_pseudosContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterFMVSPSEUDO) {
			listener.enterFMVSPSEUDO(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitFMVSPSEUDO) {
			listener.exitFMVSPSEUDO(this);
		}
	}
}
export class FABSSPSEUDOContext extends Rv32f_ext_pseudosContext {
	public I_FABSS(): TerminalNode { return this.getToken(RISCVParser.I_FABSS, 0); }
	public FREG(): TerminalNode[];
	public FREG(i: number): TerminalNode;
	public FREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.FREG);
		} else {
			return this.getToken(RISCVParser.FREG, i);
		}
	}
	constructor(ctx: Rv32f_ext_pseudosContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterFABSSPSEUDO) {
			listener.enterFABSSPSEUDO(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitFABSSPSEUDO) {
			listener.exitFABSSPSEUDO(this);
		}
	}
}
export class FNEGSPSEUDOContext extends Rv32f_ext_pseudosContext {
	public I_FNEGS(): TerminalNode { return this.getToken(RISCVParser.I_FNEGS, 0); }
	public FREG(): TerminalNode[];
	public FREG(i: number): TerminalNode;
	public FREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.FREG);
		} else {
			return this.getToken(RISCVParser.FREG, i);
		}
	}
	constructor(ctx: Rv32f_ext_pseudosContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterFNEGSPSEUDO) {
			listener.enterFNEGSPSEUDO(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitFNEGSPSEUDO) {
			listener.exitFNEGSPSEUDO(this);
		}
	}
}


export class Rv32d_ext_pseudosContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RISCVParser.RULE_rv32d_ext_pseudos; }
	public copyFrom(ctx: Rv32d_ext_pseudosContext): void {
		super.copyFrom(ctx);
	}
}
export class FLDPSEUDOContext extends Rv32d_ext_pseudosContext {
	public I_FLD(): TerminalNode { return this.getToken(RISCVParser.I_FLD, 0); }
	public FREG(): TerminalNode { return this.getToken(RISCVParser.FREG, 0); }
	public ID(): TerminalNode { return this.getToken(RISCVParser.ID, 0); }
	public XREG(): TerminalNode { return this.getToken(RISCVParser.XREG, 0); }
	constructor(ctx: Rv32d_ext_pseudosContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterFLDPSEUDO) {
			listener.enterFLDPSEUDO(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitFLDPSEUDO) {
			listener.exitFLDPSEUDO(this);
		}
	}
}
export class FSDPSEUDOContext extends Rv32d_ext_pseudosContext {
	public I_FSD(): TerminalNode { return this.getToken(RISCVParser.I_FSD, 0); }
	public FREG(): TerminalNode { return this.getToken(RISCVParser.FREG, 0); }
	public ID(): TerminalNode { return this.getToken(RISCVParser.ID, 0); }
	public XREG(): TerminalNode { return this.getToken(RISCVParser.XREG, 0); }
	constructor(ctx: Rv32d_ext_pseudosContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterFSDPSEUDO) {
			listener.enterFSDPSEUDO(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitFSDPSEUDO) {
			listener.exitFSDPSEUDO(this);
		}
	}
}
export class FMVDPSEUDOContext extends Rv32d_ext_pseudosContext {
	public I_FMVD(): TerminalNode { return this.getToken(RISCVParser.I_FMVD, 0); }
	public FREG(): TerminalNode[];
	public FREG(i: number): TerminalNode;
	public FREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.FREG);
		} else {
			return this.getToken(RISCVParser.FREG, i);
		}
	}
	constructor(ctx: Rv32d_ext_pseudosContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterFMVDPSEUDO) {
			listener.enterFMVDPSEUDO(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitFMVDPSEUDO) {
			listener.exitFMVDPSEUDO(this);
		}
	}
}
export class FABSDPSEUDOContext extends Rv32d_ext_pseudosContext {
	public I_FABSD(): TerminalNode { return this.getToken(RISCVParser.I_FABSD, 0); }
	public FREG(): TerminalNode[];
	public FREG(i: number): TerminalNode;
	public FREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.FREG);
		} else {
			return this.getToken(RISCVParser.FREG, i);
		}
	}
	constructor(ctx: Rv32d_ext_pseudosContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterFABSDPSEUDO) {
			listener.enterFABSDPSEUDO(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitFABSDPSEUDO) {
			listener.exitFABSDPSEUDO(this);
		}
	}
}
export class FNEGDPSEUDOContext extends Rv32d_ext_pseudosContext {
	public I_FNEGD(): TerminalNode { return this.getToken(RISCVParser.I_FNEGD, 0); }
	public FREG(): TerminalNode[];
	public FREG(i: number): TerminalNode;
	public FREG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.FREG);
		} else {
			return this.getToken(RISCVParser.FREG, i);
		}
	}
	constructor(ctx: Rv32d_ext_pseudosContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterFNEGDPSEUDO) {
			listener.enterFNEGDPSEUDO(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitFNEGDPSEUDO) {
			listener.exitFNEGDPSEUDO(this);
		}
	}
}


export class Static_dataContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RISCVParser.RULE_static_data; }
	public copyFrom(ctx: Static_dataContext): void {
		super.copyFrom(ctx);
	}
}
export class BYTEContext extends Static_dataContext {
	public D_BYTE(): TerminalNode { return this.getToken(RISCVParser.D_BYTE, 0); }
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	constructor(ctx: Static_dataContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterBYTE) {
			listener.enterBYTE(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitBYTE) {
			listener.exitBYTE(this);
		}
	}
}
export class HALFContext extends Static_dataContext {
	public D_HALF(): TerminalNode { return this.getToken(RISCVParser.D_HALF, 0); }
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	constructor(ctx: Static_dataContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterHALF) {
			listener.enterHALF(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitHALF) {
			listener.exitHALF(this);
		}
	}
}
export class WORDContext extends Static_dataContext {
	public D_WORD(): TerminalNode { return this.getToken(RISCVParser.D_WORD, 0); }
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	constructor(ctx: Static_dataContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterWORD) {
			listener.enterWORD(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitWORD) {
			listener.exitWORD(this);
		}
	}
}
export class FLOATContext extends Static_dataContext {
	public D_FLOAT(): TerminalNode { return this.getToken(RISCVParser.D_FLOAT, 0); }
	public fexpr(): FexprContext[];
	public fexpr(i: number): FexprContext;
	public fexpr(i?: number): FexprContext | FexprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FexprContext);
		} else {
			return this.getRuleContext(i, FexprContext);
		}
	}
	constructor(ctx: Static_dataContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterFLOAT) {
			listener.enterFLOAT(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitFLOAT) {
			listener.exitFLOAT(this);
		}
	}
}
export class ASCIIContext extends Static_dataContext {
	public D_ASCII(): TerminalNode { return this.getToken(RISCVParser.D_ASCII, 0); }
	public STRING(): TerminalNode { return this.getToken(RISCVParser.STRING, 0); }
	constructor(ctx: Static_dataContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterASCII) {
			listener.enterASCII(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitASCII) {
			listener.exitASCII(this);
		}
	}
}
export class ASCIIZContext extends Static_dataContext {
	public D_STRING(): TerminalNode { return this.getToken(RISCVParser.D_STRING, 0); }
	public STRING(): TerminalNode { return this.getToken(RISCVParser.STRING, 0); }
	constructor(ctx: Static_dataContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterASCIIZ) {
			listener.enterASCIIZ(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitASCIIZ) {
			listener.exitASCIIZ(this);
		}
	}
}
export class ZEROContext extends Static_dataContext {
	public D_ZERO(): TerminalNode { return this.getToken(RISCVParser.D_ZERO, 0); }
	public INT(): TerminalNode { return this.getToken(RISCVParser.INT, 0); }
	constructor(ctx: Static_dataContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterZERO) {
			listener.enterZERO(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitZERO) {
			listener.exitZERO(this);
		}
	}
}


export class DirectiveContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RISCVParser.RULE_directive; }
	public copyFrom(ctx: DirectiveContext): void {
		super.copyFrom(ctx);
	}
}
export class BSSContext extends DirectiveContext {
	public D_BSS(): TerminalNode { return this.getToken(RISCVParser.D_BSS, 0); }
	constructor(ctx: DirectiveContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterBSS) {
			listener.enterBSS(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitBSS) {
			listener.exitBSS(this);
		}
	}
}
export class DATAContext extends DirectiveContext {
	public D_DATA(): TerminalNode { return this.getToken(RISCVParser.D_DATA, 0); }
	constructor(ctx: DirectiveContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterDATA) {
			listener.enterDATA(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitDATA) {
			listener.exitDATA(this);
		}
	}
}
export class RODATAContext extends DirectiveContext {
	public D_RODATA(): TerminalNode { return this.getToken(RISCVParser.D_RODATA, 0); }
	constructor(ctx: DirectiveContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterRODATA) {
			listener.enterRODATA(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitRODATA) {
			listener.exitRODATA(this);
		}
	}
}
export class TEXTContext extends DirectiveContext {
	public D_TEXT(): TerminalNode { return this.getToken(RISCVParser.D_TEXT, 0); }
	constructor(ctx: DirectiveContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterTEXT) {
			listener.enterTEXT(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitTEXT) {
			listener.exitTEXT(this);
		}
	}
}
export class GLOBLContext extends DirectiveContext {
	public D_GLOBL(): TerminalNode { return this.getToken(RISCVParser.D_GLOBL, 0); }
	public ID(): TerminalNode[];
	public ID(i: number): TerminalNode;
	public ID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RISCVParser.ID);
		} else {
			return this.getToken(RISCVParser.ID, i);
		}
	}
	constructor(ctx: DirectiveContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterGLOBL) {
			listener.enterGLOBL(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitGLOBL) {
			listener.exitGLOBL(this);
		}
	}
}
export class ALIGNContext extends DirectiveContext {
	public D_ALIGN(): TerminalNode { return this.getToken(RISCVParser.D_ALIGN, 0); }
	public INT(): TerminalNode { return this.getToken(RISCVParser.INT, 0); }
	constructor(ctx: DirectiveContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterALIGN) {
			listener.enterALIGN(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitALIGN) {
			listener.exitALIGN(this);
		}
	}
}
export class BALIGNContext extends DirectiveContext {
	public D_BALIGN(): TerminalNode { return this.getToken(RISCVParser.D_BALIGN, 0); }
	public INT(): TerminalNode { return this.getToken(RISCVParser.INT, 0); }
	constructor(ctx: DirectiveContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterBALIGN) {
			listener.enterBALIGN(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitBALIGN) {
			listener.exitBALIGN(this);
		}
	}
}
export class FILEContext extends DirectiveContext {
	public D_FILE(): TerminalNode { return this.getToken(RISCVParser.D_FILE, 0); }
	public STRING(): TerminalNode { return this.getToken(RISCVParser.STRING, 0); }
	constructor(ctx: DirectiveContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterFILE) {
			listener.enterFILE(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitFILE) {
			listener.exitFILE(this);
		}
	}
}
export class EQUContext extends DirectiveContext {
	public D_EQU(): TerminalNode { return this.getToken(RISCVParser.D_EQU, 0); }
	public ID(): TerminalNode { return this.getToken(RISCVParser.ID, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: DirectiveContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterEQU) {
			listener.enterEQU(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitEQU) {
			listener.exitEQU(this);
		}
	}
}


export class ExprContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RISCVParser.RULE_expr; }
	public copyFrom(ctx: ExprContext): void {
		super.copyFrom(ctx);
	}
}
export class PARENEXPRContext extends ExprContext {
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterPARENEXPR) {
			listener.enterPARENEXPR(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitPARENEXPR) {
			listener.exitPARENEXPR(this);
		}
	}
}
export class UNARYEXPRContext extends ExprContext {
	public SIGN(): TerminalNode { return this.getToken(RISCVParser.SIGN, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterUNARYEXPR) {
			listener.enterUNARYEXPR(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitUNARYEXPR) {
			listener.exitUNARYEXPR(this);
		}
	}
}
export class PLUSEXPRContext extends ExprContext {
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public SIGN(): TerminalNode { return this.getToken(RISCVParser.SIGN, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterPLUSEXPR) {
			listener.enterPLUSEXPR(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitPLUSEXPR) {
			listener.exitPLUSEXPR(this);
		}
	}
}
export class INTEXPRContext extends ExprContext {
	public INT(): TerminalNode { return this.getToken(RISCVParser.INT, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterINTEXPR) {
			listener.enterINTEXPR(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitINTEXPR) {
			listener.exitINTEXPR(this);
		}
	}
}
export class IDEXPRContext extends ExprContext {
	public ID(): TerminalNode { return this.getToken(RISCVParser.ID, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterIDEXPR) {
			listener.enterIDEXPR(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitIDEXPR) {
			listener.exitIDEXPR(this);
		}
	}
}
export class HIRELEXPRContext extends ExprContext {
	public ID(): TerminalNode { return this.getToken(RISCVParser.ID, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterHIRELEXPR) {
			listener.enterHIRELEXPR(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitHIRELEXPR) {
			listener.exitHIRELEXPR(this);
		}
	}
}
export class LORELEXPRContext extends ExprContext {
	public ID(): TerminalNode { return this.getToken(RISCVParser.ID, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterLORELEXPR) {
			listener.enterLORELEXPR(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitLORELEXPR) {
			listener.exitLORELEXPR(this);
		}
	}
}
export class PCRELHIRELEXPRContext extends ExprContext {
	public ID(): TerminalNode { return this.getToken(RISCVParser.ID, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterPCRELHIRELEXPR) {
			listener.enterPCRELHIRELEXPR(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitPCRELHIRELEXPR) {
			listener.exitPCRELHIRELEXPR(this);
		}
	}
}
export class PCRELLORELEXPRContext extends ExprContext {
	public ID(): TerminalNode { return this.getToken(RISCVParser.ID, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterPCRELLORELEXPR) {
			listener.enterPCRELLORELEXPR(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitPCRELLORELEXPR) {
			listener.exitPCRELLORELEXPR(this);
		}
	}
}


export class FexprContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RISCVParser.RULE_fexpr; }
	public copyFrom(ctx: FexprContext): void {
		super.copyFrom(ctx);
	}
}
export class PARENFEXPRContext extends FexprContext {
	public fexpr(): FexprContext {
		return this.getRuleContext(0, FexprContext);
	}
	constructor(ctx: FexprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterPARENFEXPR) {
			listener.enterPARENFEXPR(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitPARENFEXPR) {
			listener.exitPARENFEXPR(this);
		}
	}
}
export class UNARYFEXPRContext extends FexprContext {
	public SIGN(): TerminalNode { return this.getToken(RISCVParser.SIGN, 0); }
	public fexpr(): FexprContext {
		return this.getRuleContext(0, FexprContext);
	}
	constructor(ctx: FexprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterUNARYFEXPR) {
			listener.enterUNARYFEXPR(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitUNARYFEXPR) {
			listener.exitUNARYFEXPR(this);
		}
	}
}
export class PLUSFEXPRContext extends FexprContext {
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public SIGN(): TerminalNode { return this.getToken(RISCVParser.SIGN, 0); }
	constructor(ctx: FexprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterPLUSFEXPR) {
			listener.enterPLUSFEXPR(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitPLUSFEXPR) {
			listener.exitPLUSFEXPR(this);
		}
	}
}
export class FLOATFEXPRContext extends FexprContext {
	public FLOAT(): TerminalNode { return this.getToken(RISCVParser.FLOAT, 0); }
	constructor(ctx: FexprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterFLOATFEXPR) {
			listener.enterFLOATFEXPR(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitFLOATFEXPR) {
			listener.exitFLOATFEXPR(this);
		}
	}
}
export class INTFEXPRContext extends FexprContext {
	public INT(): TerminalNode { return this.getToken(RISCVParser.INT, 0); }
	constructor(ctx: FexprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RISCVListener): void {
		if (listener.enterINTFEXPR) {
			listener.enterINTFEXPR(this);
		}
	}
	// @Override
	public exitRule(listener: RISCVListener): void {
		if (listener.exitINTFEXPR) {
			listener.exitINTFEXPR(this);
		}
	}
}
