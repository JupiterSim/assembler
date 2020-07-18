import { RType } from '../base/rtype';
import { DebugInfo } from '../../types';

/** RISC-V RV32D fcvt.d.wu instruction. */
export class FCVTDWU extends RType {
  /**
   * Creates a new RISC-V RV32D fcvt.d.wu instruction.
   *
   * @param debugInfo - Instruction debug information.
   * @param rd        - Destination register.
   * @param rs1       - Source register 1.
   */
  constructor(debugInfo: DebugInfo, rd: number, rs1: number) {
    super(debugInfo, 'fcvt.d.wu', 0x53, rd, 0x7, rs1, 1, 0x69);
  }
}
