import { Expression } from './expr';
import { Segment } from './segment';
import { TerminalNode } from 'antlr4ts/tree';

/** Assembler file. */
export interface ASMFile {
  /** File name. */
  readonly name: string;
  /** Source code. */
  readonly code: string;
}

/** Assembler debug information. */
export type DebugInfo = TerminalNode;

/** Assembler symbol table. */
export interface SymbolTable {
  /** Globals symbols. */
  readonly globals: {
    /** Symbol name. */
    [symbol: string]: {
      /** Symbol segment. */
      readonly segment: Segment;
      /** Symbol debug information. */
      readonly debugInfo: DebugInfo;
      /** Symbol address. */
      address: number;
    };
  };
  /** Local symbols. */
  readonly locals: {
    /** File name where the local symbol is. */
    [filename: string]: {
      /** Symbol name. */
      [symbol: string]: {
        /** Symbol segment. */
        readonly segment: Segment;
        /** Symbol debug information. */
        readonly debugInfo: DebugInfo;
        /** Symbol address. */
        address: number;
      };
    };
  };
  /** Local expressions. */
  readonly expr: {
    /** File name where the local symbol is. */
    [filename: string]: {
      /** Symbol name. */
      [symbol: string]: Expression;
    };
  };
}
