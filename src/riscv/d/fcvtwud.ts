import { RType } from '../base/rtype';
import { DebugInfo } from '../../types';

/** RISC-V RV32D fcvt.wu.d instruction. */
export class FCVTWUD extends RType {
  /**
   * Creates a new RISC-V RV32D fcvt.wu.d instruction.
   *
   * @param debugInfo - Instruction debug information.
   * @param rd        - Destination register.
   * @param rs1       - Source register 1.
   */
  constructor(debugInfo: DebugInfo, rd: number, rs1: number) {
    super(debugInfo, 'fcvt.wu.d', 0x53, rd, 0x7, rs1, 1, 0x61);
  }
}
